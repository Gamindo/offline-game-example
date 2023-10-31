const CACHE_NAME = "game-cache-v1";
const urlsToCache = [
  "https://gamindo.github.io/offline-game-example/",
  "https://gamindo.github.io/offline-game-example/index.html",
  "https://gamindo.github.io/offline-game-example/styles.css",
  "https://gamindo.github.io/offline-game-example/app.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
