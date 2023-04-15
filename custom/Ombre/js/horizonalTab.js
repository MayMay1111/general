jQuery(document).ready(function () {
            jQuery('#horizontalTab').easyResponsiveTabs({
                type: 'default',
                width: 'auto',
                fit: true,
                activate: function () {
                    if (jQuery(window).width() > 768) {
                        jQuery('#horizontalTab').find(".resp-tab-content").addClass('animatedfast fadeIn');
                        setTimeout(function () {
                            jQuery('#horizontalTab').find(".resp-tab-content").removeClass('animatedfast fadeIn');
                        }, 400);
                    }
                }
            });
        });
