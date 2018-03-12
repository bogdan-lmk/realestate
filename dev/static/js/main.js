$(document).ready(function () {
    svg4everybody({});
});

$('.sort-tab').click(function(e) {
    e.preventDefault();
    $('.sort-tab').removeClass('sort-tab--active');
    $(this).addClass('sort-tab--active');
});
$('.sort-tab').click(function(e) {
    e.preventDefault();
    $('.sort-tab').removeClass('sort-tab--active');
    $(this).addClass('sort-tab--active');
});

var header = document.getElementsByClassName('header');
var carousel = document.getElementsByClassName('main-carousel');
var logo = document.getElementsByClassName('logo');
var nav = document.getElementsByClassName('navigation-elment');
var btnSignup = document.getElementsByClassName('button--sign-up');
var tl = new TimelineLite();

    tl.from(header, 1.5, {opactity:0, y:-150, autoAlpha:0}),
    tl.from(logo, 0.5, {opactity:0, x:-150, autoAlpha:0}),
    tl.staggerFrom(nav, 0.5, {scale:0, rotation:-180, autoAlpha:0, ease: Circ.easeOut}, 0.2, "-=0.75"),
    tl.from(btnSignup, 0.5, {opactity:0, x:150, autoAlpha:0}),
    tl.staggerFrom(carousel, 1.75, {opactity:0, x:-1920, autoAlpha:0 }, "-=1.5");



AOS.init({
    offset: 200,
    duration: 1250,
    easing: 'ease-in-sine',
    delay: 100,
})

  $(".hamburger").click(function (e) {
        $(".mobile-menu").toggleClass("mobile-menu--active");
  });
