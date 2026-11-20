// Homepage entity panels (see the Polish Pass handoff, "Homepage animated charts").
// Each panel plays one continuous intro the first time it scrolls into view in a browser session,
// then responds only to hover / focus / tap on its columns. Panels play independently.
// Only stroke-dashoffset, opacity and transform animate. Reduced motion: no intros, no transitions.
(function () {
  const p1 = document.getElementById('ep-platform'), p2 = document.getElementById('ep-brokerage'), p3 = document.getElementById('ep-data');
  if (!p1 || !p2 || !p3) return;
  const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const seen = id => { try { return sessionStorage.getItem('sr-anim-' + id) === '1'; } catch (e) { return false; } };
  const mark = id => { try { sessionStorage.setItem('sr-anim-' + id, '1'); } catch (e) {} };
  const clamp = v => v < 0 ? 0 : v > 1 ? 1 : v;
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;   // ease-in-out cubic
  const wait = ms => new Promise(r => setTimeout(r, ms));

  // One continuous sweep: an invisible front moves across x = 0..300 (viewBox units) with a single ease.
  const sweep = (ms, frame) => new Promise(res => {
    const t0 = performance.now();
    (function f(t) { const k = clamp((t - t0) / ms); frame(ease(k) * 300); k < 1 ? requestAnimationFrame(f) : res(); })(t0);
  });

  // Each traced path draws according to where the front is within its own x-span (data-x0..data-x1).
  // Lines use non-scaling-stroke, so dash lengths are measured in screen pixels (pathLength does not work here).
  function tracer(paths, vis) {
    let lens = [], lastX = 300;
    const measure = () => {
      const sx = vis.clientWidth / 300, sy = vis.clientHeight / 84;
      lens = paths.map(p => {
        const L = p.getTotalLength(), n = 64; let px = 0, a = p.getPointAtLength(0);
        for (let i = 1; i <= n; i++) { const b = p.getPointAtLength(L * i / n); px += Math.hypot((b.x - a.x) * sx, (b.y - a.y) * sy); a = b; }
        return px + 2;
      });
      paths.forEach((p, i) => { p.style.strokeDasharray = lens[i] + ' ' + lens[i]; });
    };
    const set = X => { lastX = X; paths.forEach((p, i) => { const a = +p.dataset.x0, b = +p.dataset.x1; p.style.strokeDashoffset = String(lens[i] * (1 - clamp((X - a) / (b - a)))); }); };
    measure(); addEventListener('resize', () => { measure(); set(lastX); });
    return set;
  }

  function cols(pn) {
    const cs = [...pn.querySelectorAll('.ep-c')];
    return { cs, upTo: n => cs.forEach((c, i) => c.classList.toggle('on', i <= n)), only: k => cs.forEach((c, i) => c.classList.toggle('on', i === k)) };
  }
  function wire(pn, cs, focus, rest) {
    cs.forEach((c, i) => { const f = () => { if (!pn.busy) focus(i); }; c.addEventListener('pointerenter', f); c.addEventListener('focus', f); c.addEventListener('click', f); });
    pn.addEventListener('pointerleave', () => { if (!pn.busy) rest(); });
    pn.addEventListener('focusout', e => { if (!pn.busy && !pn.contains(e.relatedTarget)) rest(); });
  }
  const colAt = X => X >= 200 ? 2 : X >= 100 ? 1 : 0;

  function platform(pn) {
    const { cs, upTo, only } = cols(pn), segs = [...pn.querySelectorAll('.ep-seg')], cor = pn.querySelector('.ep-cor');
    const draw = tracer([...pn.querySelectorAll('.ep-tr')], pn.querySelector('.ep-vis'));
    const rest = () => { upTo(2); segs.forEach(s => s.style.opacity = 1); cor.style.opacity = 1; draw(300); };
    const focus = k => { only(k); segs.forEach((s, i) => s.style.opacity = i === k ? 1 : .25); cor.style.opacity = k >= 1 ? 1 : .25; };
    wire(pn, cs, focus, rest); rest();
    return async () => {
      pn.busy = 1; pn.classList.add('pre'); upTo(-1); draw(0); cor.style.opacity = 0;
      await sweep(1800, X => { draw(X); cor.style.opacity = clamp((X - 104) / 196); upTo(colAt(X)); });
      await wait(120); pn.classList.remove('pre'); rest(); pn.busy = 0;
    };
  }

  function brokerage(pn) {
    const { cs, upTo, only } = cols(pn), segs = [...pn.querySelectorAll('.ep-seg')], gate = pn.querySelector('.ep-gate'), ends = [...pn.querySelectorAll('.ep-end')];
    const draw = tracer([...pn.querySelectorAll('.ep-tr')], pn.querySelector('.ep-vis'));
    const rest = () => { upTo(2); segs.forEach(s => s.style.opacity = 1); gate.classList.add('on'); ends.forEach(e => e.classList.add('on')); draw(300); };
    const focus = k => { only(k); segs.forEach((s, i) => s.style.opacity = i === k ? 1 : .25); gate.classList.toggle('on', k === 1); ends.forEach(e => e.classList.toggle('on', k === 2)); };
    wire(pn, cs, focus, rest); rest();
    return async () => {
      pn.busy = 1; pn.classList.add('pre'); upTo(-1); draw(0); gate.classList.remove('on'); ends.forEach(e => e.classList.remove('on'));
      await sweep(1800, X => { draw(X); upTo(colAt(X)); gate.classList.toggle('on', X >= 110); ends.forEach(e => e.classList.toggle('on', X >= 236)); });
      await wait(120); pn.classList.remove('pre'); rest(); pn.busy = 0;
    };
  }

  function data(pn) {
    const { cs, upTo, only } = cols(pn), vis = pn.querySelector('.ep-vis'), ref = pn.querySelector('#ep-cvref');
    const gh = [...pn.querySelectorAll('.ep-gh')], ld = pn.querySelector('.ep-ldot'), qd = pn.querySelector('.ep-qd'), qx = pn.querySelector('.ep-qx');
    const draw = tracer([...pn.querySelectorAll('.ep-tr')], vis);
    // Points along the curve, sampled once in viewBox units; markers move with transform only.
    const L = ref.getTotalLength(), N = 240, pts = [];
    for (let i = 0; i <= N; i++) { const p = ref.getPointAtLength(L * i / N); pts.push([p.x, p.y]); }
    const yAt = x => { let lo = 0, hi = N; while (hi - lo > 1) { const m = (lo + hi) >> 1; pts[m][0] < x ? lo = m : hi = m; } const a = pts[lo], b = pts[hi], t = b[0] === a[0] ? 0 : (x - a[0]) / (b[0] - a[0]); return a[1] + (b[1] - a[1]) * t; };
    let Wd = vis.clientWidth, Ht = vis.clientHeight;
    const put = (el, x, y) => { el.style.transform = 'translate3d(' + (x / 300 * Wd) + 'px,' + (y / 84 * Ht) + 'px,0)'; };
    const QX = pts[Math.round(N * .66)][0];
    const placeQ = () => { Wd = vis.clientWidth; Ht = vis.clientHeight; put(qd, QX, yAt(QX)); qx.style.transform = 'translate3d(' + (QX / 300 * Wd) + 'px,0,0)'; };
    placeQ(); addEventListener('resize', placeQ);
    let loop = 0;
    const stop = () => { loop = 0; ld.style.opacity = 0; };
    const start = () => { if (loop) return; loop = 1; ld.style.opacity = 1; const t0 = performance.now();
      (function f(t) { if (!loop) return; const p = pts[Math.floor(((t - t0) / 2400 % 1) * N)]; put(ld, p[0], p[1]); requestAnimationFrame(f); })(t0); };
    const rest = () => { stop(); upTo(2); gh.forEach(g => g.style.opacity = 1); qd.style.opacity = qx.style.opacity = 1; draw(300); };
    const focus = k => { only(k); gh.forEach(g => g.style.opacity = k === 2 ? 1 : 0); qd.style.opacity = qx.style.opacity = k === 1 ? 1 : 0;
      if (k === 0) { if (rm) { put(ld, pts[N * .9 | 0][0], pts[N * .9 | 0][1]); ld.style.opacity = 1; } else start(); } else stop(); };
    wire(pn, cs, focus, rest); rest();
    return async () => {
      pn.busy = 1; pn.classList.add('pre'); upTo(0); gh.forEach(g => g.style.opacity = 0); qd.style.opacity = qx.style.opacity = 0; draw(0);
      put(ld, 0, yAt(0)); ld.style.opacity = 1;
      await sweep(1600, X => { draw(X); put(ld, X, yAt(X)); });
      ld.style.opacity = 0; upTo(1); qx.style.opacity = 1; await wait(180); qd.style.opacity = 1; await wait(520);
      upTo(2); for (const g of gh) { g.style.opacity = 1; await wait(140); } await wait(420);
      pn.classList.remove('pre'); rest(); pn.busy = 0;
    };
  }

  const intros = new Map([[p1, platform(p1)], [p2, brokerage(p2)], [p3, data(p3)]]);
  if (rm) intros.forEach((f, pn) => pn.classList.add('reduce'));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target);
    const id = e.target.id; if (rm || seen(id)) return;
    setTimeout(() => intros.get(e.target)().then(() => mark(id)), 150);
  }), { threshold: .35, rootMargin: '0px 0px -10% 0px' });
  intros.forEach((f, pn) => io.observe(pn));
})();
