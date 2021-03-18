/*  --------------------------------------
*         Table of Content
*  --------------------------------------
*  01. Banner Slider
*  02. Product Tab
*  --------------------------------------
*  -------------------------------------- */
 
jQuery(document).ready(function($){
  'use strict';
 
    /* --------------------------------------------
    ------------- 01. Banner Slider ---------------
    ----------------------------------------------- */
 
    $('.active-slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-chevron-left prev"></i>',
        nextArrow: '<i class="fas fa-chevron-right next"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
 
    /* --------------------------------------------
    ------------- 02. Product Tab ---------------
    ----------------------------------------------- */
 
    $('.product-custom-tab').each(function () {
        var $that = $(this);
        $(this).find('button').on('click', function () {
            $that.find('button').removeClass('active');
            $(this).addClass('active');
            $that.find("[data-tab-content]").hide();
            $that.find('[data-tab-content="'+ $(this).data('tab-toggle') +'"]').fadeIn(400);
        });
    });
 
 
});