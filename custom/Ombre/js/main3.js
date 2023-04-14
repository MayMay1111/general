jQuery(window).load(function () {
            "use strict";
            jQuery("#partners").owlCarousel({
                autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                items: 1,
                margin: 20,
                dots: false,
                smartSpeed: 800,
                navText: ['', ''],
                nav: false,
                loop: true,
                lazyLoad: true,
                responsive: {
                    341: {
                        items: 2
                    },
                    641: {
                        items: 3
                    },
                    1025: {
                        items: 4
                    }
                }
            });
        });
