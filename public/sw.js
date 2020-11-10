/**************************************************************************
 *  IMPORTANT: Always define your caching strategy in "sw-template.js"!   *
 **************************************************************************/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Add resources that aren´t cached automatically here:
const routes = [
    { "url": "/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2" },
    { "url": "/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2" }
];

workbox.setConfig({ debug: true });

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(routes.concat([{"revision":"73469302e9a8365d84ff9b4103003aef","url":"android-chrome-192x192.png"},{"revision":"db044e75ea38be7cc00124b0bda57f7a","url":"android-chrome-512x512.png"},{"revision":"85c6757fb8f65f2ec32bc9a2440078a2","url":"apple-touch-icon.png"},{"revision":"877aef27d76a7a1fdc01195c6fbdf465","url":"assets/css/styles.css"},{"revision":"d0fc30856a541539009e73c787a68bc1","url":"assets/fonts/Ubuntu/Ubuntu-Bold.ttf"},{"revision":"cd35c048e86586f4b39db087115fc803","url":"assets/fonts/Ubuntu/Ubuntu-BoldItalic.ttf"},{"revision":"29cc5e948a0c2b4264942a4bde749055","url":"assets/fonts/Ubuntu/Ubuntu-Italic.ttf"},{"revision":"025b624d20d5016f1cce4663e10d94f2","url":"assets/fonts/Ubuntu/Ubuntu-Light.ttf"},{"revision":"0bbae1c6caf4f919ad86d76710eda2b9","url":"assets/fonts/Ubuntu/Ubuntu-LightItalic.ttf"},{"revision":"335cc443917aa5c0bebfa28a64e8ad97","url":"assets/fonts/Ubuntu/Ubuntu-Medium.ttf"},{"revision":"068b7979ec0bafa2b5d4f86ff0636699","url":"assets/fonts/Ubuntu/Ubuntu-MediumItalic.ttf"},{"revision":"b3488e8486d2b4e3a0666997f91c7ed9","url":"assets/fonts/Ubuntu/Ubuntu-Regular.ttf"},{"revision":"2c13b5386c628f3058993bf82f4e591b","url":"assets/js/main.js"},{"revision":"e4e40b0c82d228add33b5bcfe276a859","url":"browserconfig.xml"},{"revision":"8175619c920f27a1e70672bab2e07575","url":"favicon-16x16.png"},{"revision":"593499d4f54b44e65c376dbb63cfdc82","url":"favicon-32x32.png"},{"revision":"528ed6d3a6f1038ba404f6cf5f47258f","url":"favicon.ico"},{"revision":"989082d0ee47e00f1c43382d655fadf6","url":"index.html"},{"revision":"bf0bc5d77a3a69a9460b0e1cce4c5ea5","url":"manifest.json"},{"revision":"1ce617235bd56d3fb47f8c5f53018dc8","url":"mstile-150x150.png"},{"revision":"5531ad026920c36d2e9982750740e6f0","url":"package-lock.json"},{"revision":"5793de30f5dd40bd377696afc4fe76cb","url":"package.json"},{"revision":"3d95a8eb72afbf55a5c8206af48d4b8e","url":"robots.txt"},{"revision":"fadd8421943e5ad57e5319161abe2173","url":"safari-pinned-tab.svg"}])); 
