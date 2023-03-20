$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true
  });

  $('.arriba').click(function(){
    $('body, html').animate({
      scrollTop:'0px'
    },700);
  })
});