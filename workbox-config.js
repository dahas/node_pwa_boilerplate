module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{html,png,css,ttf,js,xml,ico,json,txt,svg,woff,woff2}"
  ],
  "swDest": "public/sw.js",
  "swSrc": "sw-template.js",
  "additionalManifestEntries": [{
    "revision": rndStr(),
    "url": "/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"
  }, {
    "revision": rndStr(),
    "url": "/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"
  }]
};

function rndStr() {
  return Math.random().toString(36).substr(2, 32) + Math.random().toString(36).substr(2, 32);
}