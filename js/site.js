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

  // ── Search: a small dialog that searches the documentation site in a new tab.
  // Opened by the search buttons or Ctrl/Cmd+K.
  var dialog = document.getElementById('siteSearch');
  if (!dialog) return;
  var input = dialog.querySelector('input');
  function openSearch() {
    if (menu && !menu.hidden) setMenu(false);
    if (!dialog.open) dialog.showModal();
    input.focus();
  }
  document.querySelectorAll('[data-search-open]').forEach(function (btn) {
    btn.addEventListener('click', openSearch);
  });
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
  });
  dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  dialog.querySelector('form').addEventListener('submit', function () {
    setTimeout(function () { dialog.close(); input.value = ''; }, 0);
  });
})();
