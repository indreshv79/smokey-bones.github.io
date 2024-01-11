var $ = jQuery.noConflict();

jQuery(document).ready(function($){
    AOS.init();


/************** Add class to body when navigation open below 1200px screensize start **************/
document.querySelector(".navbar-toggler").addEventListener("click", function(){
    document.querySelector("body").classList.toggle("nav-open");
  });
/*==========================*/
/* Header fix */
/*==========================*/
var scroll = $(window).scrollTop();
if (scroll >= 10) {
    $("body").addClass("fixed");
} else {
    $("body").removeClass("fixed");
}


});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("body").addClass("fixed");
    } else {
        $("body").removeClass("fixed");
    }
});