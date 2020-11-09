import "./register.js";

$(() => {
    // ---- Add your stuff below ----

    console.log("Document is ready!");

    $('a.btn-lg').on('mouseup', e => {
        if (navigator.onLine) {
            location.href = $(e.currentTarget).data('href');
        } else {
            alert("Sorry! No internet :-(")
        }
    });
});
