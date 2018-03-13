
var slides = document.querySelectorAll('.main-carousel-gallery .slide');
var currentSlide = 0;

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var previous = document.querySelector('.mc-controls--prev');
var next = document.querySelector('.mc-controls--next');

next.onclick = function(){
    nextSlide();
};
previous.onclick = function(){
    previousSlide();
};
$('.cities-gallery').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  lazyLoad: 'ondemand',
  responsive: [
   {
     breakpoint: 1024,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 3,
       infinite: true,
       arrows: true
     }
   },
   {
     breakpoint: 768,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 1,
     }
   },
   {
     breakpoint: 640,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       arrows:false,
       autoplay:true
     }
   },
   {
     breakpoint: 560,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows:false,
     },
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]
});
