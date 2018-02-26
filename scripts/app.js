(function ($) {

// menu toggle
    $(function($){
        $( '#nav-icon1' ).click(function(){
            $( '.responsive-menu' ).toggleClass( 'expand' );
            $(this).toggleClass( 'open' );
        });
        $( '.primary-menu li a' ).click(function(){
            $( '.responsive-menu' ).toggleClass( 'expand' );
            $( '#nav-icon1' ).toggleClass( 'open' );
        });
    });

// menu mobile submenu
    $(function($){
        $(".menu-item-has-children").append("<div class='open-menu-link open'>+</div>");
        $(".menu-item-has-children").append("<div class='open-menu-link close'>-</div>");
        $(".open").addClass("visible");
        $(".open-menu-link").click(function(e){
            var childMenu =  e.currentTarget.parentNode.children[1];
            if($(childMenu).hasClass("visible")){
                $(childMenu).removeClass("visible");
                $(e.currentTarget.parentNode.children[3]).removeClass("visible");
                $(e.currentTarget.parentNode.children[2]).addClass("visible");
            } else {
                $(childMenu).addClass("visible");
                $(e.currentTarget.parentNode.children[2]).removeClass("visible");
                $(e.currentTarget.parentNode.children[3]).addClass("visible");
            }
        });
    });

// smooth scroll
    $(document).ready(function(){
        $('a[href^="https://marcin-kurdybanowski-drfz.squarespace.com/#"]').on('click',function (e) {

            var target = this.hash;
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop':  $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
    });

})(jQuery);