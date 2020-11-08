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

    /* To avoid making handler global you better 
       attach them like shown below: */
    $('a.btn-lg').on('mouseup', () => {
        console.log(navigator.onLine);
        if (navigator.onLine) {
            location.href = $('a.btn-lg').data('href');
        } else {
            alert("Sorry! No internet :-(")
        }
    });
});
