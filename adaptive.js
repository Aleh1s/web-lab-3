$(document).ready(function() {
    $('.header__burger').click(function(event) {
        console.log('toggled');
        $('.header__burger,.header__menu').toggleClass('active');
    });
});