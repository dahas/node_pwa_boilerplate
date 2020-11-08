// jQuery, Popper, Bootstrap. Order matters!
window.$ = window.jQuery = require('jquery');
import 'popper.js';
import 'bootstrap';
import{ version } from '../package.json';

// Uncomment the section below to enable the service-worker.

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js?ver=' + version)
//     });
// }
