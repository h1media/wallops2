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
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

})(jQuery);