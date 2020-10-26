// jQuery, Popper, Bootstrap. Order matters!
window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');

$(() => {
    // ---- Add your stuff below ----
    console.log("Document is ready!");

    $(function () {
        $('[data-toggle="popover"]').popover()
    })
});
