var CACHE_NAME = 'pwa-cache';

var urlsToCache = [
    '/',
    '/assets/css/styles.css',
    '/assets/js/main.js',
    '/assets/fonts/Ubuntu/Ubuntu-Light.ttf',
    '/assets/fonts/Ubuntu/Ubuntu-Regular.ttf',
    '/assets/fonts/Ubuntu/Ubuntu-Bold.ttf',
    '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff',
    '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff',
    '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf',
    '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2',
    '/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2',
    '/manifest.json',
    '/favicon-32x32.png',
    '/favicon-16x16.png',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png',
    '/apple-touch-icon.png',
    '/mstile-150x150.png',
    '/safari-pinned-tab.svg'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
