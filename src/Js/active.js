$(document).ready(function () {

      // Mean Menu
      $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "767"
      });
      // // Homepage slider
      // function mainSlider() {
      //       var BasicSlider = $('.slider-active');
      //       BasicSlider.on('init', function (e, slick) {
      //             var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
      //             doAnimations($firstAnimatingElements);
      //       });
      //       BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      //             var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      //             doAnimations($animatingElements);
      //       });
      //       BasicSlider.slick({
      //             autoplay: false,
      //             autoplaySpeed: 10000,
      //             dots: false,
      //             fade: true,
      //             arrows: false,
      //             responsive: [
      //                   { breakpoint: 767, settings: { dots: false, arrows: false } }
      //             ]
      //       });

      //       function doAnimations(elements) {
      //             var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      //             elements.each(function () {
      //                   var $this = $(this);
      //                   var $animationDelay = $this.data('delay');
      //                   var $animationType = 'animated ' + $this.data('animation');
      //                   $this.css({
      //                         'animation-delay': $animationDelay,
      //                         '-webkit-animation-delay': $animationDelay
      //                   });
      //                   $this.addClass($animationType).one(animationEndEvents, function () {
      //                         $this.removeClass($animationType);
      //                   });
      //             });
      //       }
      // }
      // Slider Area
      $('.active-slider').owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            responsive: {
                  0: {
                        items: 1,
                        nav: false
                  },
                  600: {
                        items: 1,
                        nav: false
                  },
                  991: {
                        items: 1,
                        nav: false
                  },
                  1000: {
                        items: 1
                  }
            }
      });

      // Counter Up
      $('.counter').counterUp({
            delay: 10,
            time: 1000,
      });

      // Popular Courses Area
      $('.active-popular-courses').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 1
                  },
                  1000: {
                        items: 3
                  }
            }
      });

      // Why Choose Area
      $('.why-choose-active').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 1
                  },
                  1000: {
                        items: 3
                  }
            }
      });

      // Testimonials Area
      $('.active-testimonials').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 1
                  },
                  1000: {
                        items: 2
                  }
            }
      });

      // Brand Area
      $('.brand-active').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 1
                  },
                  1000: {
                        items: 6
                  }
            }
      });

      // Product Area
      $('.product-active').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 4
                  }
            }
      });

      // FAQ Tab Area 
      $("#faq-tabs").tabs();

});


