(function($) {
    'use strict';

    // Initialize Owl Carousel with error handling
    try {
        if (typeof $.fn.owlCarousel === 'function') {
            // Middle carousel
            if ($('.middle').length) {
                $('.middle').owlCarousel({
                    loop: true,
                    margin: 1,
                    nav: false,
                    // autoplay: 1000,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 4
                        }
                    },
                    onInitialized: function() {
                        console.log('Middle carousel initialized');
                    }
                });
            }

            // Bottom carousel
            if ($('.bottom').length) {
                $('.bottom').owlCarousel({
                    loop: true,
                    margin: 1,
                    nav: false,
                    autoplay: 500,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: {
                            items: 1
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 5
                        }
                    },
                    onInitialized: function() {
                        console.log('Bottom carousel initialized');
                    }
                });
            }
        } else {
            console.warn('Owl Carousel plugin not loaded');
        }
    } catch (error) {
        console.error('Error initializing Owl Carousel:', error);
    }

    // Cleanup on page unload
    $(window).on('beforeunload', function() {
        try {
            if ($('.middle').data('owl.carousel')) {
                $('.middle').owlCarousel('destroy');
            }
            if ($('.bottom').data('owl.carousel')) {
                $('.bottom').owlCarousel('destroy');
            }
        } catch (error) {
            console.error('Error destroying carousels:', error);
        }
    });

})(jQuery);
