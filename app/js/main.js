
$(document).ready(function(){
    $('#marquee').marquee({
        duration: 15000,
        startVisible: true,
        duplicated: true,
        pauseOnHover:true,
      });


$(".burger").click(function() {
    $(".main-menu").addClass("js-active")
})
$(".main-menu__close,.main-menu__shadow").click(function() {
    $(".main-menu").removeClass("js-active")
})
$(".js-partner").click(function(){
    $("#callback-modal").arcticmodal({
    //   afterOpen: function(data, el) {
    //     $('body').css('overflow','hidden');
    //   },
    //   beforeClose: function(data, el) {
    //    setTimeout(() => {
    //     $('body').css('overflow','auto');
    //    }, 100);
    //   },
    });
  });
  (function() {

    'use strict';
  
    // breakpoint where swiper will be destroyed
    // and switches to a dual-column layout
    const breakpoint = window.matchMedia( '(min-width:992px)' );
  
    // keep track of swiper instances to destroy later
    let mySwiper;
  
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    const breakpointChecker = function() {
  
      // if larger viewport and multi-row layout needed
      if ( breakpoint.matches === true ) {
  
        // clean up old instances and inline styles when available
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
  
        // or/and do nothing
        return;
  
        // else if a small viewport and single column layout needed
        } else if ( breakpoint.matches === false ) {
  
          // fire small viewport version of swiper
          return enableSwiper();
  
        }
  
    };
    
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    const enableSwiper = function() {
  
        $('.common').each(function(){
            mySwiper = new Swiper(this, {
              
                
              observer: true,  
              observeParents: true,
              slidesPerView: "auto",
              spaceBetween: 1,
            });
        });
    };
  
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////
  
    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
  
    // kickstart
    breakpointChecker();
  
  
  
  })(); /* IIFE end */

})