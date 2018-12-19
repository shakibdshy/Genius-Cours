$(document).ready(function () {

      // Slider Area
      $('.active-slider').owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
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

