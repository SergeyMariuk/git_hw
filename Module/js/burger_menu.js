$(document).ready(function() {
    $('.burger_menu').click(function() {
        $('.burger_menu').toggleClass('open-menu');
        $('.nav-menu').toggleClass('open-menu');
        $('body').toggleClass('lock-screen');
    });
});
