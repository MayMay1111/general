jQuery(document).ready(function () {
            jQuery("#model-gallery a").colorbox({
                rel: 'photo-gallery',
                title: function () {
                    return jQuery(this).data('title');
                },
                maxWidth: '100%',
                maxHeight: '100%'
            });
        });
