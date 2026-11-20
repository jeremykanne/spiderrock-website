// Homepage entity panels. Each panel plays its intro once per browser session when scrolled into
// view (one panel at a time), then responds only to hover / focus / tap on its columns.
// Reduced motion: no intros, no transitions. Ported from the approved prototype.
(function () {
  const p1 = document.getElementById('ep-platform'), p2 = document.getElementById('ep-brokerage'), p3 = document.getElementById('ep-data');
  if (!p1 || !p2 || !p3) return;
  const rm = matchMedia('(prefers-reduced-motion: reduce)').matches, W = ms => new Promise(r => setTimeout(r, ms));
  const EZ = ' cubic-bezier(.65,0,.35,1)';
  const seen = id => { try { return sessionStorage.getItem('sr-anim-' + id) === '1'; } catch (e) { return false; } };
  const mark = id => { try { sessionStorage.setItem('sr-anim-' + id, '1'); } catch (e) {} };
  const H = 84;

  function grow(rect, ms) {
    return new Promise(res => {
      const t0 = performance.now();
      (function f(t) {
        const k = Math.min(1, (t - t0) / ms), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        rect.setAttribute('width', 100 * e);
        k < 1 ? requestAnimationFrame(f) : res();
      })(t0);
    });
  }

  function cols(pn, show) {
    const cs = [...pn.querySelectorAll('.ep-c')];
    const on = k => cs.forEach((c, i) => c.classList.toggle('on', k === 'all' || k === i));
    cs.forEach((c, i) => ['mouseenter', 'focus', 'click'].forEach(e => c.addEventListener(e, () => { if (!pn.busy) { on(i); show(i); } })));
    pn.addEventListener('mouseleave', () => { if (!pn.busy) { on('all'); show('all'); } });
    pn.addEventListener('focusout', e => { if (!pn.busy && !pn.contains(e.relatedTarget)) { on('all'); show('all'); } });
    if (rm) pn.classList.add('reduce');
    on('all'); show('all');
    return on;
  }

  function thirds(pn, extra) {
    const sg = [...pn.querySelectorAll('.ep-seg')], cr = [...pn.querySelectorAll('.ep-cr')];
    const show = k => { sg.forEach((s, i) => s.style.opacity = (k === 'all' || k === i) ? 1 : .12); extra(k); };
    const on = cols(pn, show);
    return async () => {
      if (rm) return;
      pn.busy = 1; on(-1); sg.forEach(s => s.style.opacity = 1); cr.forEach(r => r.setAttribute('width', 0)); extra(-1);
      await W(150);
      for (const i of [0, 1, 2]) { on(i); extra(i, true); await grow(cr[i], 750); await W(350); }
      on('all'); show('all'); pn.busy = 0;
    };
  }

  // Brokerage: checkpoint bar and branch labels
  const gt = p2.querySelector('.ep-gate'), ends = [...p2.querySelectorAll('.ep-end')];
  const ex2 = (k, prog) => {
    gt.classList.toggle('on', k === 'all' || (prog ? k >= 1 : k === 1));
    ends.forEach(x => x.classList.toggle('on', k === 'all' || k === 2));
  };

  // Data & Analytics: curve, history curves, query marker and live dot
  const cv = p3.querySelector('.ep-cv'), ref = p3.querySelector('#ep-cvref'), gh = [...p3.querySelectorAll('.ep-gh')];
  const ld = p3.querySelector('.ep-ldot'), qd = p3.querySelector('.ep-qd'), qx = p3.querySelector('.ep-qx'), vis3 = p3.querySelector('.ep-vis');
  cv.setAttribute('pathLength', '1'); cv.style.strokeDasharray = '1'; cv.style.strokeDashoffset = '0';
  const L = ref.getTotalLength(), at = f => ref.getPointAtLength(f * L);
  const place = (el, f) => { const p = at(f); el.style.left = (p.x / 3) + '%'; el.style.top = (p.y / H * vis3.clientHeight) + 'px'; };
  const placeQ = () => { place(qd, .66); qx.style.left = (at(.66).x / 3) + '%'; };
  placeQ(); addEventListener('resize', placeQ);
  let loop = 0;
  const stopLoop = () => { loop = 0; ld.style.opacity = 0; };
  const startLoop = () => {
    if (loop) return; loop = 1; ld.style.opacity = 1;
    const t0 = performance.now();
    (function f(t) { if (!loop) return; place(ld, ((t - t0) / 2200) % 1); requestAnimationFrame(f); })(t0);
  };
  const show3 = k => {
    stopLoop();
    gh.forEach(g => g.style.opacity = (k === 'all' || k === 2) ? 1 : 0);
    [qd, qx].forEach(e => e.style.opacity = (k === 'all' || k === 1) ? 1 : 0);
    if (k === 0) { if (rm) { place(ld, .9); ld.style.opacity = 1; } else startLoop(); }
  };
  const on3 = cols(p3, show3);
  const run = ms => new Promise(res => {
    ld.style.opacity = 1; const t0 = performance.now();
    (function f(t) { const k = Math.min(1, (t - t0) / ms); place(ld, k); k < 1 ? requestAnimationFrame(f) : res(); })(t0);
  });
  const play3 = async () => {
    if (rm) return;
    p3.busy = 1; on3(-1); stopLoop(); gh.forEach(g => g.style.opacity = 0); qd.style.opacity = 0; qx.style.opacity = 0;
    cv.style.transition = 'none'; cv.style.strokeDashoffset = '1'; await W(40);
    cv.style.transition = 'stroke-dashoffset 1.2s' + EZ; cv.style.strokeDashoffset = '0'; await W(1250);
    on3(0); await run(1300); ld.style.opacity = 0;
    on3(1); qx.style.opacity = 1; await W(250); qd.style.opacity = 1; await W(800);
    on3(2); for (const g of gh) { g.style.opacity = 1; await W(220); } await W(600);
    on3('all'); show3('all'); p3.busy = 0;
  };

  const plays = new Map([[p1, thirds(p1, () => {})], [p2, thirds(p2, ex2)], [p3, play3]]);
  if (rm || !('IntersectionObserver' in window)) return;
  let qq = Promise.resolve();
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    if (seen(e.target.id)) return;
    qq = qq.then(async () => { await plays.get(e.target)(); mark(e.target.id); });
  }), { threshold: .6 });
  plays.forEach((f, pn) => io.observe(pn));
})();
