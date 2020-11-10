// jQuery, Popper, Bootstrap. Order matters!
window.$ = window.jQuery = require('jquery');
import 'popper.js';
import 'bootstrap';

import { Workbox } from 'workbox-window';

const enableServiceWorker = false;

if (enableServiceWorker && 'serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');

    wb.addEventListener('installed', event => {
        console.log("# ServiceWorker installed:", event)
        if (event.isUpdate) {
            if (confirm(`New content is available!. Click OK to refresh`)) {
                window.location.reload();
            }
        }
    });

    wb.register().then(() => console.log("# ServiceWorker registered!"));
}