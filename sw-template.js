/**************************************************************************
 *  IMPORTANT: Always define your caching strategy in "sw-template.js"!   *
 **************************************************************************/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

workbox.setConfig({ debug: true });

workbox.core.skipWaiting();
workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST); 
