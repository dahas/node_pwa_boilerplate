import "./register.js";

$(() => {
    // ---- Add your stuff below ----

    console.log("Document is ready!");

    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();

    $('a.logo').on('mouseup', e => {
        if (navigator.onLine) {
            location.href = $(e.currentTarget).data('href');
        } else {
            M.toast({html: 'Sorry! No internet :-('})
        }
    });
});
