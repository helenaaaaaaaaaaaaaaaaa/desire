$(document).ready(function () {
   // $("input[name='phone']").mask(" +7 (999) 999-99-99");
   $('.js-top__slider').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true,
   });

   if($('.gallery__inner').length>0){
      var mixer = mixitup('.gallery__inner', {
         load: {
            filter:'.living'
         }
      });
   }
   
   $('.contact-slider').slick({
      slidesToShow: 10,
      slidesToScroll: 10,
      dots: true,
      arrows: false,
      responsive: [
         {
            breakpoint: 1700,
            settings: {
               slidesToShow: 8,
               slidesToScroll: 8,

            }
         },
         {
            breakpoint: 1511,
            settings: {
               slidesToShow: 6,
               slidesToScroll: 6,

            }
         },
         {
            breakpoint: 1201,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,

            }
         },
         {
            breakpoint: 841,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,

            }
         },
         {
            breakpoint: 551,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,

            }
         },
      ]
   });
  
   
   
});