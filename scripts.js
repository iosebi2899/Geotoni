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
$(".types2").click(function () {
    $(this).addClass("bigger")
    $(".what-you-need2").removeClass("bigger")
    $(".events2").removeClass("bigger")
});
$(".what-you-need2").click(function () {
    $(this).addClass("bigger")
    $(".types2").removeClass("bigger")
    $(".events2").removeClass("bigger")
});
$(".events2").click(function () {
    $(this).addClass("bigger")
    $(".types2").removeClass("bigger")
    $(".what-you-need2").removeClass("bigger")
});
$(".hotels").click(function () {
    $(this).addClass("bigger")
    $(".restourants").removeClass("bigger")
    $(".night-Clubs").removeClass("bigger")
    $(".Bar-and-lounge").removeClass("bigger")
});
$(".night-Clubs").click(function () {
    $(this).addClass("bigger")
    $(".hotels").removeClass("bigger")
    $(".restourants").removeClass("bigger")
    $(".Bar-and-lounge").removeClass("bigger")
});
$(".Bar-and-lounge").click(function () {
    $(this).addClass("bigger")
    $(".hotels").removeClass("bigger")
    $(".night-Clubs").removeClass("bigger")
    $(".restourants").removeClass("bigger")
});
$(".restourants").click(function () {
    $(this).addClass("bigger")
    $(".hotels").removeClass("bigger")
    $(".night-Clubs").removeClass("bigger")
    $(".Bar-and-lounge").removeClass("bigger")
});



$(".go-signin").click(function () {
    $(".sign-in").toggleClass("hidden")
    $(".log-in").toggleClass("hidden")
});
$(".go-login").click(function () {
    $(".sign-in").toggleClass("hidden")
    $(".log-in").toggleClass("hidden")
});
$(".burger-icon").click(function () {
    $(".burger").toggleClass("shown-burger")
});
$(".F").click(function () {
    $(this).addClass("active-fos")
    $(".S").removeClass("active-fos")
});
$(".S").click(function () {
    $(this).addClass("active-fos")
    $(".F").removeClass("active-fos")
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