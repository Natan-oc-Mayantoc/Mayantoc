// Mayantoc PWA service worker
const VERSION = 'mayantoc-v3';   // palitan (v2, v3...) tuwing may binago sa site para mag-update ang app
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

// Network-first para sa lahat ng sariling files (laging pinakabago kapag may internet),
// cache lang ang gagamitin kapag offline.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin && !url.host.includes('fonts.g')) return;

  e.respondWith(
    fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) {
        const copy = res.clone();
        caches.open(VERSION).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() =>
      caches.match(req, { ignoreSearch: true }).then(r => r || (req.mode === 'navigate' ? caches.match('index.html') : undefined))
    )
  );
});
