const CACHE_VERSION = "v1-2024-10-21";
const CACHE_NAME = `widget-static-${CACHE_VERSION}`;
const NAVIGATION_TIMEOUT = 2500;

const scopeUrl = new URL(self.registration.scope);
const BASE_PATH = scopeUrl.pathname.endsWith("/")
  ? scopeUrl.pathname
  : `${scopeUrl.pathname}/`;

const toAbsoluteUrl = (value) => new URL(value, scopeUrl.origin).toString();

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll([toAbsoluteUrl(BASE_PATH)]))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("widget-static-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("message", (event) => {
  const { data } = event;
  if (!data || data.type !== "PRECACHE_URLS" || !Array.isArray(data.urls)) {
    return;
  }
  const unique = Array.from(
    new Set(
      data.urls
        .filter(Boolean)
        .map((url) => toAbsoluteUrl(url))
        .filter((url) => url.startsWith(scopeUrl.origin))
    )
  );
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(unique))
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.mode === "navigate") {
    event.respondWith(
      Promise.race([
        fetch(request).then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        }),
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve(
                caches
                  .match(request)
                  .then((match) => match || caches.match(toAbsoluteUrl(BASE_PATH)))
              ),
            NAVIGATION_TIMEOUT
          )
        ),
      ]).catch(() =>
        caches
          .match(request)
          .then((match) => match || caches.match(toAbsoluteUrl(BASE_PATH)))
      )
    );
    return;
  }

  const isStaticAsset =
    url.origin === scopeUrl.origin &&
    (url.pathname.startsWith(`${BASE_PATH}assets/`) ||
      url.pathname.endsWith(".avif") ||
      url.pathname.endsWith(".svg") ||
      url.pathname.endsWith(".css") ||
      url.pathname.endsWith(".js"));

  if (!isStaticAsset) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
