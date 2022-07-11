
$(document).ready(function(){
    $('#marquee').marquee({
        duration: 15000,
        startVisible: true,
        duplicated: true,
        pauseOnHover:true,
      });
})

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
