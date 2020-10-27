// jQuery, Popper, Bootstrap. Order matters!
window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');

$(() => {
    // ---- Add your stuff below ----

    console.log("Document is ready!");

    // Enable popovers:
    $('[data-toggle="popover"]').popover();

    /* Inline event handler must be made global 
       by attaching them to the windows object! */
    window.showAlert = () => {
        alert("OK!")
    }

    /* To avoid making handler global you better 
       attach them like shown below: */
    // $('#alert').on('mouseup', () => {
    //     alert("OK!");
    // });
});
