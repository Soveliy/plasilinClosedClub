


$(document).ready(function(){
    $pl01 = $('#pl01'),
    $pl02 = $('#pl02'),
    $pl03 = $('#pl03'),
    $pl04 = $('#pl04'),
    $pl05 = $('#pl05'),
    $pl06 = $('#pl06'),
    tlPrl = new TimelineMax({repeat:-1}); 
    tlPrl
							.to($pl01, .25, {morphSVG:"#pl02"}, "+=.25")
							.to($pl01, .25, {morphSVG:"#pl03"}, "+=.25")
							.to($pl01, .25, {morphSVG:"#pl04"}, "+=.25")
							.to($pl01, .25, {morphSVG:"#pl05"}, "+=.25")
                            .to($pl01, .25, {morphSVG:"#pl06"}, "+=.25")
							// .to($pl01, .25, {morphSVG:$pl01}, "+=.25");      
                                
                            
  let isOpenModal = false;
    // $('.main-menu a[href^="#"]').click(function(){ 
    //     let anchor = $(this).attr('href');  
    //     window.location.hash = '';
    //     $(".main-menu").removeClass("js-active")
    //     $('html, body').animate({           
    //     scrollTop:  $(anchor).offset().top  
    //     }, 1000);      
    //     if(history.pushState) { history.pushState({}, null, window.location.pathname); }                      
    //     });

    //
    $('.form').on('submit', function(e) {
        if ($(this).find('input[name=email]').val() && $(this).find('input[name=fax]').val() && $(this).find('input[name=policy]').is(':checked')) {
            let post_data = {
                'name': $(this).find('input[name=name]').val(),
                'email': $(this).find('input[name=email]').val(),
                'phone': $(this).find('input[name=phone]').val(),
                'fax': $(this).find('input[name=fax]').val(),
                'position': $(this).find('input[name=position]').val()
            };
            
            $.ajax({
                type: 'POST',
                url: '/request.php',
                data: post_data,
                dataType: 'html',
                success: function(msg){
                    //console.log(msg);
                    if(isOpenModal){
                        $("#callback-modal").arcticmodal("close");
                    }
                    $("#callback-ok-modal").arcticmodal();
                },
                error: function () {
                    console.log("ERROR ajax");
                }
            });
        } else {
            console.log('ERROR');
        }

        e.preventDefault();
    });
    //-

    $('.main-menu a[href^="#"], .hero__link').on('click', function(e) { // ???????? ???????????? ???????????????? ????????????, ???? ?????????????????? ??????????????????:
        let link = $(this).attr('href'), // ?????????? ???????????? ??????????. ?????? ???? ???? ?????????? id ????????????????
            el = $(document).find(link); // ???????? ??????????????
            $(".main-menu").removeClass("js-active")
        if(el.length > 0) { // ???????? ???? ????????????????????
          el = el.eq(0).offset().top; // ?????????? ???????????? ??????????????
          $('html, body').animate({
            scrollTop: el+'px' // ?????????????????? ?? ???????? ????????????
          }, 1000, 'linear');
        }
        return false; // ???????????????? ?????????????? ???? ???????????? => ?? ?????????? ?????????? ?? ???????????????? ????????????
      });
    $('#marquee').marquee({
        duration: 15000,
        startVisible: true,
        duplicated: true,
        pauseOnHover:false,
      });
      // new Kursor({
      //   el: '.cursor'
      // })
      var kursorx = new kursor({
        type: 4,
      });
      $("form").each(function(  ) {
        $(this).validate({
            invalidHandler: function(event, validator) {
                // 'this' refers to the form
                var errors = validator.numberOfInvalids();
                if (errors) {
                  $("div.form__error").show();
                } else {
                  $("div.form__error").hide();
                }
              }
          });
      });
     
      $(".form__input--number").mask("+7 (999) 999 - 99 - 99")

$(".burger").click(function() {
    $(".main-menu").addClass("js-active")
})
$(".main-menu__close,.main-menu__shadow").click(function() {
    $(".main-menu").removeClass("js-active")
})

$("body").on("mouseenter", ".b-modal", function(){
  
    $('.arcticmodal-overlay').addClass("js-active")
})
   
$("body").on("mouseleave ", ".b-modal", function(){
  
    $('.arcticmodal-overlay').removeClass("js-active")
})
     
$("body").on("mouseenter", ".privilege", function(){
  
    $('.kursor').addClass("bg")
})
   
$("body").on("mouseleave ", ".privilege", function(){
  
    $('.kursor').removeClass("bg")
})
      
$("body").on("mouseenter", ".privilege .common__col:not(.common__col--empty)", function(){
    setTimeout(() => {
        $('.kursor').addClass("filter")
        $(".privilege__svg").addClass("hidden")
    }, 100);
  
})
$("body").on("mouseleave", "[data-black-block]", function(){
    $('.burger').removeClass("white")
    $('.kursor').removeClass("white")
})
$("body").on("mouseenter", "[data-black-block]", function(){
    $('.burger').addClass("white")
    $('.kursor').addClass("white")
})   

  document.addEventListener('DOMContentLoaded', function () {
    BackgroundCheck.init({
      targets: '.burger'
    });
  });
  
$("body").on("mouseleave ", ".privilege .common__col:not(.common__col--empty)", function(){
    // console.log("mouse")
    setTimeout(() => {
        $('.kursor').removeClass("filter")
        $(".privilege__svg").removeClass("hidden")
    }, 50);
        
 
   
})
    
var mouseTimer = null;
$(".privilege").mousemove(function() {
    clearTimeout(mouseTimer);
    $(".privilege__svg").removeClass("privilege__svg--big")
    mouseTimer = setTimeout(function () {
        $(".privilege__svg").addClass("privilege__svg--big")
    }, 5000);
}).mouseleave(function() {
    clearTimeout(mouseTimer);
    $(".privilege__svg").removeClass("privilege__svg--big")
});

$(".js-partner").click(function(){
    isOpenModal = true
    $("#callback-modal").arcticmodal({
        beforeClose: function(data, el) {
            isOpenModal = false
        },
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



    // ???????????????????????????? wow.js
    new WOW().init();
    // ???????????????? ?????? ?????????????????? ?????????????????? ???????????????? ??????????????????
    let animation_text = document.querySelectorAll("[data-animation-frame]");
    if (animation_text) {
        Array.prototype.forEach.call(animation_text, function(text) {
            // ?????????? ?????????? ???? ???????????? ?? ??????????????????
            let splite_el = text.querySelectorAll("[data-split-text]");
            // ?????????????????????????? ???????????????? ???????????????? ?????????????????? ????????
            let delay = 5;
            // ???????? ???????? ???????????? ????????, ???? ?????????????????? ???? ?????????? ?? ?????????????????? ????????????
            if (splite_el) {
                Array.prototype.forEach.call(splite_el, function(el) {
                    let letter_arr = el.innerText.split('');
                    el.innerText = "";
                    for (let i = 0; i < letter_arr.length; i++) {
                        let span = document.createElement('span');
                        span.className = "letter";
                        span.classList.add("animation-ready");

                        let span_wrapper = document.createElement('span');
                        span_wrapper.className = "letter-wrapper";

                        if (letter_arr[i] == " ") {
                            span_wrapper.classList.add("letter-space");
                            span.classList.add("letter-space");
                        }
                        else {
                            span.setAttribute('style', '-webkit-animation-delay: ' + delay / 10 +'s; animation-delay: ' + delay / 10 +'s; will-change: transform;');
                            delay = delay + 0.2;
                            span.classList.add("wow");
                            span.classList.add("showLetter");
                        }
                        span.insertAdjacentText("beforeend", letter_arr[i]);
                        span_wrapper.insertAdjacentElement('beforeend', span);
                        el.insertAdjacentElement("beforeend", span_wrapper);
                        span.addEventListener("animationend", letterAnimationHandler);
                        function letterAnimationHandler() {
                            this.removeAttribute('style');
                            if (i == letter_arr.length - 1) {
                                if (this.closest(".animation-title-blue")) {
                                    this.closest(".animation-title-blue").classList.add("animation-loaded");
                                }
                            }
                            span.removeEventListener("animationend", letterAnimationHandler);
                        }
                    }
                });
            }
        });
    }
    
   

})
var show = true;
var countbox = ".common-item__price";
$(window).on("scroll load resize", function () {
    if (!show) return false; // ???????????????? ?????????? ????????????????, ???????? ?????? ?????? ???????? ??????????????????
    var w_top = $(window).scrollTop(); // ???????????????????? ???????????????? ???? ?????????????? ???????? ???????????????????? ????????????????
    var e_top = $(countbox).offset().top; // ???????????????????? ???? ?????????? ???? ???????????????????? ???? ?????????? ?????????? ??????????????????
    var w_height = $(window).height(); // ???????????? ???????? ????????????????
    var d_height = $(document).height(); // ???????????? ?????????? ??????????????????
    var e_height = $(countbox).outerHeight(); // ???????????? ???????????? ?????????? ???? ????????????????????
    if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.common-item__price span').css('opacity', '1');
        $('.common-item__price span').spincrement({
            thousandSeparator: "",
            duration: 1200
        });
         
        show = false;
    }
});
if( window.innerWidth >= 1023 ){
    var items = [], point = document.querySelector('.privilege__svg').createSVGPoint();
    function getCoordinates(e, svg) {
        point.x = e.clientX;
        point.y = e.clientY;
        return point.matrixTransform(svg.getScreenCTM().inverse());
    }
    function Item(config) {
        Object.keys(config).forEach(function (item) {
            this[item] = config[item];
        }, this);
        this.el.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
        this.el.addEventListener('touchmove', this.touchMoveHandler.bind(this));
    }
    Item.prototype = {
        update: function update(c) {
            // $('.kursorChild').css('background-position-y', c.y);
            // $('.kursorChild').css('background-position-x', c.x);
         
         setTimeout(() => {
            this.clip.setAttribute('cx', c.x);
            this.clip.setAttribute('cy', c.y);
         }, 125);
        },
        mouseMoveHandler: function mouseMoveHandler(e) {
            this.update(getCoordinates(e, this.svg));
        },
        touchMoveHandler: function touchMoveHandler(e) {
            e.preventDefault();
            var touch = e.targetTouches[0];
            if (touch) return this.update(getCoordinates(touch, this.svg));
        }
    };
    [].slice.call(document.querySelectorAll('.privilege'), 0).forEach(function (item, index) {
        items.push(new Item({
            el: item,
            svg: item.querySelector('svg'),
            clip: document.querySelector('#clip-'+index+' circle'),
        }));
      });
    
    
} 

