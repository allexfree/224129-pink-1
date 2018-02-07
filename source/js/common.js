$(document).ready(function() {
  if ($(window).width() <= 959 && $('.main-menu__list').css('display', 'block')) {
    $(".main-menu__list").css("display", "none");
    $("nav").removeClass("main-menu--opened");
    $("nav").toggleClass("main-menu--closed");
  }
  $(".main-menu__toggle").on("click", function() {

    $(".main-menu__list").css("display", "block");
    $("nav").removeClass("main-menu--closed");
    $("nav").toggleClass("main-menu--opened");
  });
});
