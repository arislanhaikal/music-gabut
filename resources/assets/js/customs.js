  // Loader (must important)
  // $(window).on('load', function() {
  //     $('#loader').find('img').fadeOut('').end().delay(500).fadeOut('slow');
  //     $('body').css({'overflow': 'auto'});
  // });
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click',function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 65)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 65
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 110) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  if ($('.owl-home').length) {
    $('.owl-home').owlCarousel({
      loop: true,
      autoplay: true,
      nav: false,
      dots: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
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
    });
  }

  if ($('.owl-albums').length) {
    $('.owl-albums').owlCarousel({
      loop: true,
      autoplay: true,
      margin:15,
      nav: true,
      dots: false,
      navText: ["<i class='ionicons ion-ios-arrow-thin-left'></i>", "<i class='ionicons ion-ios-arrow-thin-right'></i>"],
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 6
        },
        1000: {
          items: 7
        }
      }
    });
  }

  if ($('.owl-artist').length) {
    $('.owl-artist').owlCarousel({
      loop: true,
      autoplay: true,
      margin:15,
      nav: true,
      dots: false,
      navText: ["<i class='ionicons ion-ios-arrow-thin-left'></i>", "<i class='ionicons ion-ios-arrow-thin-right'></i>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  }

  if ($('.owl-event').length) {
    $('.owl-event').owlCarousel({
      loop: true,
      autoplay: true,
      margin:15,
      nav: true,
      dots: true,
      animateOut: 'fadeOutDown',
      animateIn: 'flipInX',
      navText: ["<i class='ionicons ion-ios-arrow-thin-left'></i>", "<i class='ionicons ion-ios-arrow-thin-right'></i>"],
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
    });
  }