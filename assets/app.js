(function () {
  'use strict';

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.MAY = window.MAY || {};
  window.MAY.$ = $; window.MAY.$$ = $$;
  window.MAY.reduced = reduced;
  window.MAY.isTouch = isTouch;

  /* ---------------- Logo fallback ---------------- */
  // If assets/mayantoc.jpg is missing, show the letter M instead of a broken image.
  $$('.js-logo').forEach(img => {
    img.addEventListener('error', function () {
      const box = this.parentElement;
      this.remove();
      if (box && !box.textContent.trim()) box.textContent = 'M';
    });
  });

  /* ---------------- Loader ---------------- */
  const loader = $('#loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), reduced ? 0 : 550);
    });
    // safety: never trap the page behind the loader
    setTimeout(() => loader.classList.add('hidden'), 3500);
  }

  /* ---------------- Theme ---------------- */
  const themeToggle = $('#themeToggle');
  const themeIcon = $('#themeIcon');
  const SUN = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
  const MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('mayantoc-theme', t); } catch (e) {}
    if (themeIcon) themeIcon.innerHTML = t === 'dark' ? SUN : MOON;
  }
  let stored = null;
  try { stored = localStorage.getItem('mayantoc-theme'); } catch (e) {}
  if (stored) setTheme(stored);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
  if (themeToggle) themeToggle.addEventListener('click', () =>
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

  const smooth = { target: window.scrollY, current: window.scrollY, active: false, ease: 0.085 };

  function maxScroll() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }

  if (!isTouch && !reduced && window.innerWidth > 1024) {
    smooth.active = true;
    document.documentElement.style.scrollBehavior = 'auto';

    window.addEventListener('wheel', e => {
      if (document.body.style.overflow === 'hidden') return;
      if (e.ctrlKey) return;                                  
      e.preventDefault();
      smooth.target = Math.min(maxScroll(), Math.max(0, smooth.target + e.deltaY));
      requestTick();
    }, { passive: false });

    window.addEventListener('keydown', e => {
      if (e.target.matches('input, textarea, select')) return;
      const step = window.innerHeight * 0.85;
      const map = { PageDown: step, PageUp: -step, ArrowDown: 110, ArrowUp: -110, Home: -1e7, End: 1e7 };
      if (e.key === ' ' && !e.target.closest('button, a')) map[' '] = step;
      if (map[e.key] === undefined) return;
      e.preventDefault();
      smooth.target = Math.min(maxScroll(), Math.max(0, smooth.target + map[e.key]));
      requestTick();
    });

    // Keep in sync when something else moves the page (anchor jump, resize…)
    window.addEventListener('resize', () => { smooth.target = smooth.current = window.scrollY; });
  }

  let rafId = null;
  function requestTick() { if (rafId === null) rafId = requestAnimationFrame(loop); }
  function loop() {
    smooth.current += (smooth.target - smooth.current) * smooth.ease;
    if (Math.abs(smooth.target - smooth.current) < 0.4) {
      smooth.current = smooth.target;
      window.scrollTo(0, smooth.current);
      rafId = null;
      return;
    }
    window.scrollTo(0, smooth.current);
    rafId = requestAnimationFrame(loop);
  }

  function scrollToY(y) {
    y = Math.min(maxScroll(), Math.max(0, y));
    if (smooth.active) { smooth.target = y; requestTick(); }
    else window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
  }
  window.MAY.scrollToY = scrollToY;

  /* ---------------- Scroll progress + header + back to top ---------------- */
  const progress = $('#scrollProgress');
  const header = $('#header');
  const backToTop = $('#backToTop');
  let ticking = false;
  function onScroll() {
    const y = window.scrollY;
    const h = maxScroll();
    if (progress) progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    if (header) header.classList.toggle('scrolled', y > 40);
    if (backToTop) backToTop.classList.toggle('visible', y > 600);
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    if (!smooth.active) { smooth.target = smooth.current = window.scrollY; }
  }, { passive: true });
  onScroll();
  if (backToTop) backToTop.addEventListener('click', () => scrollToY(0));

  /* ---------------- Anchor links ---------------- */
  $$('a[href*="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const hash = href.slice(href.indexOf('#'));
      const path = href.split('#')[0];
      if (hash === '#' || (path && path !== location.pathname.split('/').pop() && path !== '')) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      scrollToY(target.getBoundingClientRect().top + window.scrollY - 72);
      history.replaceState(null, '', hash);
    });
  });

  /* ---------------- Mobile drawer ---------------- */
  const hamburger = $('#hamburger');
  const drawer = $('#drawer');
  const drawerOverlay = $('#drawerOverlay');
  const drawerClose = $('#drawerClose');
  function openDrawer() {
    drawer.classList.add('open'); drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
    drawerClose.focus();
  }
  function closeDrawer() {
    drawer.classList.remove('open'); drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.focus();
  }
  if (hamburger && drawer) {
    hamburger.addEventListener('click', openDrawer);
    drawerClose.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);
    $$('.drawer__link').forEach(l => l.addEventListener('click', closeDrawer));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });
  }

  /* ---------------- Reveal on scroll ---------------- */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  window.MAY.observeReveals = function (root) {
    $$('.reveal:not(.visible)', root || document).forEach((el, i) => {
      el.style.transitionDelay = Math.min(i, 8) * 45 + 'ms';
      revealObserver.observe(el);
    });
  };
  window.MAY.observeReveals();

  /* ---------------- Counters ---------------- */
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400, start = performance.now();
      (function step(now) {
        const p = Math.min(1, (now - start) / duration);
        el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step); else el.textContent = target;
      })(start);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$('[data-count]').forEach(el => counterObserver.observe(el));

  /* ---------------- Accessibility panel ---------------- */
  const a11yToggle = $('#a11yToggle');
  const a11yPanel = $('#a11yPanel');
  if (a11yToggle && a11yPanel) {
    a11yToggle.addEventListener('click', e => {
      e.stopPropagation();
      a11yToggle.setAttribute('aria-expanded', a11yPanel.classList.toggle('open'));
    });
    document.addEventListener('click', e => {
      if (a11yPanel.classList.contains('open') && !a11yPanel.contains(e.target) && !a11yToggle.contains(e.target)) {
        a11yPanel.classList.remove('open');
        a11yToggle.setAttribute('aria-expanded', 'false');
      }
    });
    $$('[data-font]').forEach(b => b.addEventListener('click', function () {
      document.documentElement.style.fontSize = (parseFloat(this.dataset.font) * 100) + '%';
      try { localStorage.setItem('mayantoc-font', this.dataset.font); } catch (e) {}
      $$('[data-font]').forEach(x => x.classList.remove('active')); this.classList.add('active');
    }));
    $$('[data-contrast]').forEach(b => b.addEventListener('click', function () {
      document.documentElement.setAttribute('data-contrast', this.dataset.contrast);
      try { localStorage.setItem('mayantoc-contrast', this.dataset.contrast); } catch (e) {}
      $$('[data-contrast]').forEach(x => x.classList.remove('active')); this.classList.add('active');
    }));
    $$('[data-motion]').forEach(b => b.addEventListener('click', function () {
      document.documentElement.setAttribute('data-motion', this.dataset.motion);
      try { localStorage.setItem('mayantoc-motion', this.dataset.motion); } catch (e) {}
      $$('[data-motion]').forEach(x => x.classList.remove('active')); this.classList.add('active');
      smooth.active = this.dataset.motion !== 'reduced' && smooth.active;
    }));
    const reset = $('#a11yReset');
    if (reset) reset.addEventListener('click', () => {
      document.documentElement.style.fontSize = '';
      document.documentElement.removeAttribute('data-contrast');
      document.documentElement.removeAttribute('data-motion');
      ['mayantoc-font','mayantoc-contrast','mayantoc-motion'].forEach(k => { try { localStorage.removeItem(k); } catch (e) {} });
      $$('.a11y-btn').forEach(b => b.classList.remove('active'));
      $('[data-font="1"]').classList.add('active');
      $('[data-contrast="normal"]').classList.add('active');
      $('[data-motion="normal"]').classList.add('active');
    });
    try {
      const f = localStorage.getItem('mayantoc-font');
      if (f) { document.documentElement.style.fontSize = (parseFloat(f) * 100) + '%'; $$('[data-font]').forEach(b => b.classList.toggle('active', b.dataset.font === f)); }
      const c = localStorage.getItem('mayantoc-contrast');
      if (c) { document.documentElement.setAttribute('data-contrast', c); $$('[data-contrast]').forEach(b => b.classList.toggle('active', b.dataset.contrast === c)); }
      const m = localStorage.getItem('mayantoc-motion');
      if (m) { document.documentElement.setAttribute('data-motion', m); $$('[data-motion]').forEach(b => b.classList.toggle('active', b.dataset.motion === m)); }
    } catch (e) {}
  }

  /* ---------------- Site search (index built from MAY.SEARCH) ---------------- */
  const overlay = $('#searchOverlay');
  const searchToggle = $('#searchToggle');
  const searchClose = $('#searchClose');
  const input = $('#siteSearchInput');
  const results = $('#searchResults');
  let focusedIdx = -1;

  function openSearch() {
    overlay.style.opacity = '1'; overlay.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
    setTimeout(() => input.focus(), 100);
  }
  function closeSearch() {
    overlay.style.opacity = '0'; overlay.style.visibility = 'hidden';
    document.body.style.overflow = '';
    input.value = ''; render(''); searchToggle.focus();
  }
  function render(q) {
    const index = window.MAY.SEARCH || [];
    q = (q || '').toLowerCase().trim();
    focusedIdx = -1;
    if (!q) {
      results.innerHTML = '<div style="padding:40px 22px;text-align:center;color:var(--muted);font-size:14px;">Type to search services, barangays, news and documents.</div>';
      return;
    }
    const matches = index.filter(i =>
      i.title.toLowerCase().includes(q) || (i.meta || '').toLowerCase().includes(q) || i.type.toLowerCase().includes(q));
    if (!matches.length) {
      results.innerHTML = '<div style="padding:40px 22px;text-align:center;color:var(--muted);font-size:14px;">Walang nahanap para sa "' + q + '". Try another word.</div>';
      return;
    }
    results.innerHTML = matches.slice(0, 12).map((m, i) => `
      <a class="search-result" href="${m.url || '#'}" data-index="${i}" style="display:flex;align-items:center;gap:14px;padding:14px 22px;border-bottom:1px solid var(--border);cursor:pointer;transition:background .15s;">
        <div style="width:38px;height:38px;border-radius:8px;background:var(--light-gray);display:flex;align-items:center;justify-content:center;color:var(--forest);flex-shrink:0;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:14px;font-weight:600;color:var(--ink);margin-bottom:2px;">${m.title}</div>
          <div style="font-size:12px;color:var(--muted);">${m.meta || ''}</div>
        </div>
        <div style="font-size:10.5px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--forest);background:var(--light-gray);padding:3px 9px;border-radius:100px;flex-shrink:0;">${m.type}</div>
      </a>`).join('');
  }
  if (overlay && searchToggle) {
    searchToggle.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.style.visibility === 'visible') closeSearch();
      if (e.key === '/' && !e.target.matches('input, textarea')) { e.preventDefault(); openSearch(); }
    });
    input.addEventListener('input', function () { render(this.value); });
    input.addEventListener('keydown', function (e) {
      const rs = $$('.search-result', results);
      if (!rs.length) return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        focusedIdx = e.key === 'ArrowDown' ? Math.min(focusedIdx + 1, rs.length - 1) : Math.max(focusedIdx - 1, 0);
        rs.forEach((r, i) => r.style.background = i === focusedIdx ? 'var(--light-gray)' : '');
      } else if (e.key === 'Enter' && focusedIdx >= 0) rs[focusedIdx].click();
    });
    render('');
  }

  /* ---------------- Custom cursor ---------------- */
  if (!isTouch && !reduced) {
    const dot = $('#cursorDot'), ring = $('#cursorRing');
    if (dot && ring) {
      let mx = 0, my = 0, rx = 0, ry = 0;
      document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      });
      (function anim() {
        rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
        requestAnimationFrame(anim);
      })();
      const targets = 'a, button, .service-row, .brgy-row, .transparency-card, .event-row, input, textarea, .leader-card, .award-card, .news-card';
      document.addEventListener('mouseover', e => { if (e.target.closest(targets)) ring.classList.add('hover'); });
      document.addEventListener('mouseout',  e => { if (e.target.closest(targets)) ring.classList.remove('hover'); });
    }
  }

  /* ---------------- Reusable carousel ----------------
     Usage: MAY.carousel({ root:'#heroCarousel', slides:[{img,label,title}] })  */
  window.MAY.carousel = function (opts) {
    const root = $(opts.root);
    if (!root) return;
    const track = $('.carousel__track', root);
    const dotsBox = $('.carousel__dots', root);
    const counter = $('.carousel__counter', root);
    const prev = $('.carousel__btn--prev', root);
    const next = $('.carousel__btn--next', root);
    const data = opts.slides || [];
    let i = 0, paused = false, timer = null;

    track.innerHTML = data.map((s, n) => `
      <div class="carousel__slide">
        <img src="${s.img}" alt="${s.title}" loading="${n === 0 ? 'eager' : 'lazy'}" />
        <div class="carousel__caption">
          <div class="carousel__caption-label">${s.label}</div>
          <div class="carousel__caption-title">${s.title}</div>
        </div>
      </div>`).join('');

    dotsBox.innerHTML = data.map((_, n) =>
      `<button class="carousel__dot${n === 0 ? ' active' : ''}" role="tab" aria-label="Slide ${n + 1}" aria-selected="${n === 0}"></button>`).join('');
    const dots = $$('.carousel__dot', dotsBox);

    function go(n) {
      i = (n + data.length) % data.length;
      track.style.transform = `translateX(-${i * 100}%)`;
      dots.forEach((d, k) => { d.classList.toggle('active', k === i); d.setAttribute('aria-selected', k === i); });
      if (counter) counter.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(data.length).padStart(2, '0');
    }
    function auto() {
      if (timer) clearInterval(timer);
      if (reduced) return;
      timer = setInterval(() => { if (!paused) go(i + 1); }, opts.interval || 6500);
    }
    dots.forEach((d, n) => d.addEventListener('click', () => { go(n); auto(); }));
    if (next) next.addEventListener('click', () => { go(i + 1); auto(); });
    if (prev) prev.addEventListener('click', () => { go(i - 1); auto(); });
    root.addEventListener('mouseenter', () => paused = true);
    root.addEventListener('mouseleave', () => paused = false);
    root.addEventListener('focusin', () => paused = true);
    root.addEventListener('focusout', () => paused = false);
    root.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  { e.preventDefault(); go(i - 1); auto(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(i + 1); auto(); }
    });
    let sx = 0;
    root.addEventListener('touchstart', e => sx = e.changedTouches[0].screenX, { passive: true });
    root.addEventListener('touchend', e => {
      const d = sx - e.changedTouches[0].screenX;
      if (Math.abs(d) > 50) { go(i + (d > 0 ? 1 : -1)); auto(); }
    }, { passive: true });
    go(0); auto();
  };

  /* ---------------- Marquee filler ---------------- */
  const mq = $('#marqueeTrack');
  if (mq) {
    const items = ['Mayantoc', 'Tarlac', 'Serbisyong totoo', 'Malinis na pamamahala', 'Bawat barangay', 'Umuunlad'];
    const html = items.map(t => `<div class="marquee__item">${t}</div>`).join('');
    mq.innerHTML = html + html;
  }
})();
