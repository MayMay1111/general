setTimeout(function () {
jQuery("#testimonials").show();
            var owl = jQuery("#testimonials").owlCarousel({
                items: 1,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                dots: false,
                autoHeight: false,
                margin: 100,
                mouseDrag: false,
                touchDrag: false,
                smartSpeed: 800,
                nav: false,
                loop: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut'
            });
            jQuery('#testimonials').find('.testimonial-nav-left .fa').click(function() {
                owl.trigger('prev.owl.carousel');
            });
            jQuery('#testimonials').find('.testimonial-nav-right .fa').click(function() {
                owl.trigger('next.owl.carousel');
            });}
,1000)
