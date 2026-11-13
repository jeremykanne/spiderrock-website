// Header behaviour, shared by every page (markup in _includes/partials/header.njk):
// sub-nav dropdowns, the mobile menu, and the docs search dialog.
(function () {
  // ── Dropdowns: open on click/tap and keyboard (CSS also opens them on hover and on
  // keyboard focus). Escape or a click elsewhere closes them.
  var dropdowns = document.querySelectorAll('.dd');
  function closeAll(except) {
    dropdowns.forEach(function (dd) {
      if (dd !== except) dd.querySelector('.dd-btn').setAttribute('aria-expanded', 'false');
    });
  }
  dropdowns.forEach(function (dd) {
    var btn = dd.querySelector('.dd-btn');
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      closeAll(dd);
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      dd.classList.toggle('is-dismissed', open);
    });
    dd.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      btn.setAttribute('aria-expanded', 'false');
      dd.classList.add('is-dismissed');
      btn.focus();
    });
    dd.addEventListener('focusout', function (e) {
      if (dd.contains(e.relatedTarget)) return;
      btn.setAttribute('aria-expanded', 'false');
      dd.classList.remove('is-dismissed');
    });
    dd.addEventListener('mouseleave', function () { dd.classList.remove('is-dismissed'); });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dd')) closeAll();
  });

  // ── Mobile menu: a full-height sheet. Section rows expand and collapse.
  var menu = document.getElementById('mobileMenu');
  var openBtn = document.querySelector('[data-menu-open]');
  function setMenu(open) {
    menu.hidden = !open;
    openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.documentElement.classList.toggle('menu-open', open);
    (open ? menu.querySelector('[data-menu-close]') : openBtn).focus();
  }
  if (menu && openBtn) {
    openBtn.addEventListener('click', function () { setMenu(true); });
    menu.querySelector('[data-menu-close]').addEventListener('click', function () { setMenu(false); });
    menu.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    menu.querySelectorAll('.m-row[aria-controls]').forEach(function (row) {
      row.addEventListener('click', function () {
        var open = row.getAttribute('aria-expanded') !== 'true';
        row.setAttribute('aria-expanded', open ? 'true' : 'false');
        row.parentElement.classList.toggle('is-open', open);
        document.getElementById(row.getAttribute('aria-controls')).hidden = !open;
      });
    });
    // Close the sheet if the window grows past the mobile breakpoint.
    matchMedia('(min-width: 1024px)').addEventListener('change', function (mq) {
      if (mq.matches && !menu.hidden) setMenu(false);
    });
  }

  // ── In-page tabs (product pages): underline the tab for the section in view.
  var tabs = document.querySelectorAll('.page-tabs a[href^="#"]');
  if (tabs.length && 'IntersectionObserver' in window) {
    var byId = {};
    tabs.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var visible = {};
    var clicked = null;   // a clicked tab stays active while its section is in view
    function highlight() {
      var current = clicked && visible[clicked.getAttribute('href').slice(1)] ? clicked : null;
      tabs.forEach(function (a) { if (!current && visible[a.getAttribute('href').slice(1)]) current = a; });
      if (!current) return;
      tabs.forEach(function (a) { a.classList.toggle('is-active', a === current); });
      var row = current.parentElement;
      row.scrollLeft = current.offsetLeft - (row.clientWidth - current.offsetWidth) / 2;
    }
    tabs.forEach(function (a) {
      a.addEventListener('click', function () { clicked = a; visible[a.getAttribute('href').slice(1)] = true; highlight(); });
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        visible[e.target.id] = e.isIntersecting;
        if (!e.isIntersecting && clicked && clicked.getAttribute('href') === '#' + e.target.id) clicked = null;
      });
      highlight();
    }, { rootMargin: '-140px 0px -55% 0px' });
    Object.keys(byId).forEach(function (id) { var el = document.getElementById(id); if (el) spy.observe(el); });
  }

  // ── "New" badges on news cards: shown until the date the build stamps on them
  // (three weeks after the post date), so they expire without a rebuild.
  var today = new Date().toISOString().slice(0, 10);
  document.querySelectorAll('[data-new-until]').forEach(function (el) {
    el.hidden = today >= el.getAttribute('data-new-until');
  });

  // ── Search: one dialog for the website and the documentation, opened by the search buttons
  // or Ctrl/Cmd+K. Website results come from the Pagefind index built with the site
  // (/pagefind/, see eleventy.config.js); the Documentation group links to the docs site's search.
  // Tabs filter to one group. Enter opens the first result.
  var dialog = document.getElementById('siteSearch');
  if (!dialog) return;
  var form = dialog.querySelector('form');
  var input = dialog.querySelector('input');
  var tabs = dialog.querySelector('.search-tabs');
  var siteGroup = dialog.querySelector('[data-group="site"]');
  var docsGroup = dialog.querySelector('[data-group="docs"]');
  var siteList = siteGroup.querySelector('.search-list');
  var siteEmpty = siteGroup.querySelector('.search-empty');
  var docsMore = docsGroup.querySelector('.search-more');
  var scope = 'all';
  var pagefind = null;
  var seq = 0;

  function loadPagefind() {
    if (!pagefind) {
      pagefind = import('/pagefind/pagefind.js').then(function (pf) {
        return pf.options({ excerptLength: 22 }).then(function () { return pf; });
      }).catch(function () { return null; });
    }
    return pagefind;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  // Page titles carry the site name ("Options Analytics — SpiderRock …"); keep the page part.
  function cleanTitle(t) { return (t || '').split(/\s+[—|–]\s+/)[0]; }

  function show() {
    var q = input.value.trim();
    tabs.hidden = !q;
    siteGroup.hidden = !q || scope === 'docs';
    docsGroup.hidden = !q || scope === 'site';
  }
  function setScope(next) {
    scope = next;
    tabs.querySelectorAll('[role="tab"]').forEach(function (t) { t.setAttribute('aria-selected', String(t.dataset.scope === scope)); });
    show();
  }
  function run() {
    var q = input.value.trim();
    var mine = ++seq;
    docsMore.href = form.action + '?q=' + encodeURIComponent(q);
    docsMore.querySelector('span').textContent = q;
    show();
    if (!q) { siteList.innerHTML = ''; return; }
    loadPagefind().then(function (pf) {
      if (!pf) return null;
      return pf.debouncedSearch(q, {}, 200);
    }).then(function (res) {
      if (mine !== seq || res === null) return;
      if (!res) { siteList.innerHTML = ''; siteEmpty.hidden = false; return; }
      return Promise.all(res.results.slice(0, 8).map(function (r) { return r.data(); })).then(function (pages) {
        if (mine !== seq) return;
        siteEmpty.hidden = pages.length > 0;
        siteList.innerHTML = pages.map(function (p) {
          return '<li><a href="' + esc(p.url) + '"><span class="search-title">' + esc(cleanTitle(p.meta.title)) +
            '</span><span class="search-excerpt">' + p.excerpt + '</span></a></li>';
        }).join('');
      });
    });
  }

  function openSearch() {
    if (menu && !menu.hidden) setMenu(false);
    if (!dialog.open) dialog.showModal();
    input.focus();
    loadPagefind();
  }
  document.querySelectorAll('[data-search-open]').forEach(function (btn) {
    btn.addEventListener('click', openSearch);
  });
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
  });
  dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  tabs.addEventListener('click', function (e) {
    var t = e.target.closest('[role="tab"]');
    if (t) { setScope(t.dataset.scope); input.focus(); }
  });
  input.addEventListener('input', run);
  // Enter: open the first visible result, or the docs search in a new tab.
  form.addEventListener('submit', function (e) {
    var first = !siteGroup.hidden && siteList.querySelector('a');
    if (first) { e.preventDefault(); window.location.href = first.href; return; }
    setTimeout(function () { dialog.close(); }, 0);
  });
  dialog.addEventListener('close', function () { input.value = ''; setScope('all'); run(); });
})();
