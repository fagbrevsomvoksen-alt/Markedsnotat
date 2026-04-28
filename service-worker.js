const CACHE_VERSION = 'espen-co-v7-skandinavisk';
const APP_SHELL = [
  './index.html',
  './manifest.json',
  './current-note.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first for current-note.json so updates show up immediately;
// cache-first for everything else (faster, offline-capable).
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isNote = url.pathname.endsWith('/current-note.json');

  if (isNote) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(event.request, copy));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request))
    );
  }
});
