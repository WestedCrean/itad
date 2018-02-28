$(document).ready(function() {
    //Sticky navbar
    $(function(){
        $(window).scroll(function(){
            var winTop = $(window).scrollTop();
            if(winTop >= 30){
                $("body").addClass("sticky-header");
                ("#itadlogo-navbar").css("visibility","visible");
            }else{
                $("body").removeClass("sticky-header");
                $("#itadlogo-navbar").css("visibility","hidden");
            }
        });
    });
    //Smooth nav link scrolling
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 600, 'swing', function () {
                window.location.hash = target;
            });
        });

    $('.carousel').bcSwipe({ threshold: 50 });
});

