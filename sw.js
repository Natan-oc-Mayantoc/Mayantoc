// Mayantoc PWA service worker
const VERSION = 'mayantoc-v2';   // palitan (v2, v3...) tuwing may binago sa site para mag-update ang app
const PRECACHE = [
  "about.html",
  "awards.html",
  "barangays.html",
  "contact.html",
  "events.html",
  "government.html",
  "index.html",
  "news.html",
  "services.html",
  "transparency.html",
  "./",
  "manifest.webmanifest",
  "assets/style.css",
  "assets/data.js",
  "assets/app.js",
  "assets/mayantoc.jpg",
  "assets/mayantoc.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first para sa mga pahina (laging bago kapag may internet), cache-first para sa assets
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(r => r || caches.match('index.html')))
    );
    return;
  }

  // same-origin + Google Fonts: stale-while-revalidate
  if (url.origin === location.origin || url.host.includes('fonts.g')) {
    e.respondWith(
      caches.match(req).then(cached => {
        const net = fetch(req).then(res => {
          if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(VERSION).then(c => c.put(req, copy));
          }
          return res;
        }).catch(() => cached);
        return cached || net;
      })
    );
  }
});
