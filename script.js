/*$(document).ready(function() {

    var $header = $('#navbar');

    var prevScrollPos = $(window).scrollTop();
    $(window).scroll(function() {
        var currentScrollPos = $(window).scrollTop();
        if (prevScrollPos > currentScrollPos) {
            $header.removeClass('animated slideOutUp').addClass('animated slideInDown')
        } else {
            $header.removeClass('animated slideInDown').addClass('animated slideOutUp')
        }
        prevScrollPos = currentScrollPos;
    });
});