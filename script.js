$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      arrows: false,
      speed: 600,
      autoplaySpeed: 3000
    });

    $('.carousel_gallery').slick({
      slidesToShow: 3,
      prevArrow: '<i class="icon-left-open"></i>',
      nextArrow: '<i class="icon-right-open"></i>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 1
          }
        }
      ]
    });

    $('.carousel_feedback').slick({
      dots: true,
      //autoplay: true,
      arrows: false,
      speed: 600,
      autoplaySpeed: 3000
    });


    let action = function (e) {
          $(".full_info .item").hide();
          $('.feature_list li').removeClass('active');
          $(e.currentTarget).addClass('active');
          $("#" + $(e.currentTarget).data('target')).fadeIn();
      };
    $('.feature_list li').on({
      mouseup: action,
    });
  });