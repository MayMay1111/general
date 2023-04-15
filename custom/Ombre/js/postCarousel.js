jQuery(window).load(function () {
            jQuery(".grid-carousel").owlCarousel({
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
                lazyLoad: false,
                animateIn: 'zoomIn',
                animateOut: 'zoomOut'
            });
        });
