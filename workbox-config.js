module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{html,png,css,ttf,js,xml,ico,json,txt,svg,woff,woff2}"
  ],
  "swDest": "public/sw.js",
  "swSrc": "sw-template.js",
  "additionalManifestEntries": []
};

function rndStr() {
  return Math.random().toString(36).substr(2, 32) + Math.random().toString(36).substr(2, 32);
}