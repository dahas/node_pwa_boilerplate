import "./register.js";

$(() => {
    // ---- Add your stuff below ----

    console.log("Document is ready!");

    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();

    $('span.logo').on('mouseup', e => {
        if (navigator.onLine) {
            location.href = $(e.currentTarget).data('href');
        } else {
            e.preventDefault();
            M.toast({html: 'Sorry! No internet :-('})
            // alert("Sorry! No internet :-(")
        }
    });
});
