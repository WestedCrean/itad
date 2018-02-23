$(document).ready(function() {

    var navbar = $("#navigator");
    AdjustHeader(); // Incase the user loads the page from halfway down (or something);
    $(window).scroll(function() {
        AdjustHeader();
    });

    function AdjustHeader(){
        if ($(window).scrollTop() > 80) {
            if (!navbar.hasClass("position-fixed")) {
                navbar.addClass("position-fixed");
            }
        } else {
            navbar.removeClass("position-fixed");
        }
    }

    $('.carousel').carousel({
        interval: 2000
    });


});

