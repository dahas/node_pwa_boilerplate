window.$ = window.jQuery = require('jquery');
import { Workbox } from 'workbox-window';

const enableServiceWorker = true;

$(() => {

    // ---- Add your stuff below ----

    console.log("Document is ready!");

    // Register MaterializeCSS components:
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();

    $('span.logo').on('mouseup', e => {
        if (navigator.onLine) {
            location.href = $(e.currentTarget).data('href');
        } else {
            M.toast({ html: 'Sorry! No internet :-(' })
        }
    });

    // ---- Add your stuff above ----

    const confirmReload = M.Modal.getInstance($('#reload'));

    $("#reload-page").on('click', () => {
        location.href = location.href;
    });
    
    registerServiceWorker(confirmReload);
});

// ---- HELPER ----

function isTouchDevice() {
    return "ontouchstart" in document.documentElement;
}

function registerServiceWorker(confirmReload) {
    if (enableServiceWorker && 'serviceWorker' in navigator) {
        const wb = new Workbox('sw.js');
        wb.addEventListener('installed', event => {
            console.log("# ServiceWorker installed:", event)
            if (event.isUpdate) {
                confirmReload.open();
            }
        });
        wb.register().then(() => console.log("# ServiceWorker registered!"));
    }
}
