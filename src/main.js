import "./register.js";

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

    $('a.btn-lg').on('mouseup', e => {
        if (navigator.onLine) {
            location.href = $(e.currentTarget).data('href');
        } else {
            alert("Sorry! No internet :-(")
        }
    });
});
