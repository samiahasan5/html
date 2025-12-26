$(document).ready(function() {
    $(document).foundation();
    
    $(document).on('click', '.menu-icon', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        var $mobileMenu = $('#mobile-menu');
        
        if ($mobileMenu.hasClass('is-open')) {
            $mobileMenu.removeClass('is-open');
            $mobileMenu.attr('aria-hidden', 'true');
            $('body').removeClass('is-off-canvas-open');
        } else {
            $mobileMenu.addClass('is-open');
            $mobileMenu.attr('aria-hidden', 'false');
            $('body').addClass('is-off-canvas-open');
        }
        
        return false;
    });
    
    $(document).on('click', '#mobile-menu .close-button', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        var $mobileMenu = $('#mobile-menu');
        $mobileMenu.removeClass('is-open');
        $mobileMenu.attr('aria-hidden', 'true');
        $('body').removeClass('is-off-canvas-open');
        
        return false;
    });
    
    $(document).on('click', function(e) {
        var $mobileMenu = $('#mobile-menu');
        if ($mobileMenu.hasClass('is-open')) {
            if (!$(e.target).closest('#mobile-menu').length && !$(e.target).closest('.menu-icon').length) {
                $mobileMenu.removeClass('is-open');
                $mobileMenu.attr('aria-hidden', 'true');
                $('body').removeClass('is-off-canvas-open');
            }
        }
    });
    
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            var $mobileMenu = $('#mobile-menu');
            if ($mobileMenu.hasClass('is-open')) {
                $mobileMenu.removeClass('is-open');
                $mobileMenu.attr('aria-hidden', 'true');
                $('body').removeClass('is-off-canvas-open');
            }
        }
    });
});

