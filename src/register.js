// jQuery, Popper, Bootstrap. Order matters!
window.$ = window.jQuery = require('jquery');
import 'popper.js';
import 'bootstrap';

const enableServiceWorker = true;

if (enableServiceWorker && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(() => console.log("ServiceWorker registered!"))
    });
}
