jQuery(window).load(function () {
            jQuery("#model-gallery").owlCarousel({
                items: 1,
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                dots: true,
                autoHeight: true,
                margin: 100,
                mouseDrag: false,
                smartSpeed: 800,
                navText: ['', ''],
                nav: false,
                loop: true,
                animateIn: 'zoomIn',
                animateOut: 'zoomOut'
            });
        });
