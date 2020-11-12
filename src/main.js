import { enableServiceWorker, deferredPrompt } from "./register.js";

$(() => {
    // ---- Add your stuff below ----

    console.log("Document is ready!");

    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
    $('.fixed-action-btn').floatingActionButton();
    $('.fixed-action-btn').hide();

    $('a.logo').on('mouseup', e => {
        if (navigator.onLine) {
            location.href = $(e.currentTarget).data('href');
        } else {
            M.toast({ html: 'Sorry! No internet :-(' })
        }
    });

    pwaInstallButton();
});

// ---- HELPER ----

function pwaInstallButton() {
    if (enableServiceWorker && 'serviceWorker' in navigator) {
        window.addEventListener('beforeinstallprompt', e => {
            e.preventDefault();
            deferredPrompt = e;
            $('.fixed-action-btn').show();
            $('.fixed-action-btn').on(isTouchDevice() ? 'touchstart' : 'click', () => {
                $('.fixed-action-btn').hide();
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    deferredPrompt = null;
                });
            });
        });
    }
}

function isTouchDevice() {
    return "ontouchstart" in document.documentElement;
}
