const CACHE_NAME = 'islamic-hub-v1';
const assets = ['./', './index.html', './logo.png', './img.JPG'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
