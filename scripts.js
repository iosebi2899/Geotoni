$(".types").click(function () {
    $(this).addClass("bigger")
    $(".what-you-need").removeClass("bigger")
    $(".events").removeClass("bigger")
    $(".slick-slider2").addClass("active")
    $(".slick-slider1").removeClass("active")
    $(".slick-slider3").removeClass("active")
});
$(".what-you-need").click(function () {
    $(this).addClass("bigger")
    $(".types").removeClass("bigger")
    $(".events").removeClass("bigger")
    $(".slick-slider1").addClass("active")
    $(".slick-slider2").removeClass("active")
    $(".slick-slider3").removeClass("active")
});
$(".events").click(function () {
    $(this).addClass("bigger")
    $(".types").removeClass("bigger")
    $(".what-you-need").removeClass("bigger")
    $(".slick-slider3").addClass("active")
    $(".slick-slider2").removeClass("active")
    $(".slick-slider1").removeClass("active")
});
$(document).ready(function(){
    $('.gallery').slick({
        infinite: true,
        autoplay: true,
        dots:true,
        autoplaySpeed: 1300,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });
  });