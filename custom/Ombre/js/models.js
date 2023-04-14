jQuery(window).load(function () {
            jQuery("#models").owlCarousel({
                items: 1,
                margin: 30,
                dots: false,
                smartSpeed: 800,
                navText: [' ', ' '],
                nav: true,
                loop: false,
                navRewind: false,
                lazyLoad: true,
                responsive: {
                    481: {
                        items: 1
                    },
                    641: {
                        items: 2
                    },
                    1025: {
                        items: 3
                    }
                }
            });
        });
