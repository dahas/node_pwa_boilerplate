/**************************************************************************
 *  IMPORTANT: Always define your caching strategy in "sw-template.js"!   *
 **************************************************************************/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Add resources that aren´t cached automatically here:
const routes = [
    {"url": "/"}, 
    {"url": "/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"},
    {"url": "/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"}
];

workbox.precaching.precacheAndRoute(routes.concat(self.__WB_MANIFEST), {
    directoryIndex: null,
    cleanUrls: false
});
