$(document).ready(function () {

      // Slider Area
      $('.slider-active').owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="fal fa-chevron-left"></i>','<i class="fal fa-chevron-right"></i>'],
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 1
                  },
                  1000: {
                        items: 1
                  }
            }
      })
});

