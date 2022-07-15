
$(document).ready(function(){
    $('#marquee').marquee({
        duration: 15000,
        startVisible: true,
        duplicated: true,
        pauseOnHover:true,
      });
      // new Kursor({
      //   el: '.cursor'
      // })
      var kursorx = new kursor({
        type: 4,
      });
      $("form").validate({
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



    // Инициализируем wow.js
    new WOW().init();
    // Выбираем все кастомные текстовые анимации появления
    let animation_text = document.querySelectorAll("[data-animation-frame]");
    if (animation_text) {
        Array.prototype.forEach.call(animation_text, function(text) {
            // Делим текст по буквам в заголовке
            let splite_el = text.querySelectorAll("[data-split-text]");
            // Устанавливаем задержку анимации появления букв
            let delay = 5;
            // если есть массив букв, то вставляем по одной и анимируем каждую
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
        this.clip.setAttribute('cx', c.x);
        this.clip.setAttribute('cy', c.y);
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


