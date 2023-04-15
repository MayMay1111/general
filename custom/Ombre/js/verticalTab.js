jQuery(document).ready(function () {
            jQuery('#verticalTab').easyResponsiveTabs({
                type: 'vertical',
                width: 'auto',
                fit: true,
                activate: function () {
                    if (jQuery(window).width() > 768) {
                        jQuery('#verticalTab').find(".resp-tab-content").addClass('animatedfast fadeIn');
                        setTimeout(function () {
                            jQuery('#verticalTab').find(".resp-tab-content").removeClass('animatedfast fadeIn');
                        }, 400);
                    }
                }
            });
        });
