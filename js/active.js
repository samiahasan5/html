(function($) {
    'use strict';

    var preloader = document.getElementById('preloader');
    
    function hidePreloader() {
        if (preloader) {
            preloader.classList.add('loaded');
            setTimeout(function() {
                if (preloader && preloader.parentNode) {
                    preloader.parentNode.removeChild(preloader);
                }
            }, 500);
        }
    }

    window.addEventListener('load', hidePreloader);
    setTimeout(hidePreloader, 5000);

    function loadImage(img) {
        var src = img.getAttribute('data-src');
        var srcset = img.getAttribute('data-srcset');
        
        if (src) {
            var newImg = new Image();
            newImg.onload = function() {
                if (srcset) {
                    img.srcset = srcset;
                }
                img.src = src;
                img.classList.add('loaded');
                img.classList.remove('lazy-placeholder');
                img.removeAttribute('data-src');
            };
            newImg.onerror = function() {
                img.classList.add('error');
                img.classList.remove('lazy-placeholder');
            };
            newImg.src = src;
        } else {
            img.classList.add('loaded');
        }
    }

    function initLazyLoading() {
        var lazyImages = document.querySelectorAll('img.lazy:not(.loaded)');
        
        if (lazyImages.length === 0) return;

        if ('IntersectionObserver' in window) {
            var imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var img = entry.target;
                        loadImage(img);
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '200px 0px',
                threshold: 0
            });

            lazyImages.forEach(function(img) {
                imageObserver.observe(img);
            });
        } else {
            lazyImages.forEach(function(img) {
                loadImage(img);
            });
        }
    }

    $(document).ready(function() {
        setTimeout(initLazyLoading, 100);
    });

    $(window).on('load', function() {
        initLazyLoading();
    });

    if (typeof $.fn.rCounter === 'function') {
        $('.count-num').rCounter();
    }

    var yearElement = document.getElementById('copyright-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    var subscribeForm = document.getElementById('widget-subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            var emailInput = document.getElementById('newsletter-email');
            var errorElement = document.getElementById('email-error');
            
            if (emailInput && errorElement) {
                var emailValue = emailInput.value.trim();
                var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
                
                if (!emailValue) {
                    e.preventDefault();
                    errorElement.textContent = 'Email address is required';
                    errorElement.classList.add('is-visible');
                    emailInput.setAttribute('aria-invalid', 'true');
                    return false;
                } else if (!emailPattern.test(emailValue)) {
                    e.preventDefault();
                    errorElement.textContent = 'Please enter a valid email address';
                    errorElement.classList.add('is-visible');
                    emailInput.setAttribute('aria-invalid', 'true');
                    return false;
                } else {
                    errorElement.classList.remove('is-visible');
                    emailInput.setAttribute('aria-invalid', 'false');
                }
            }
        });

        var emailInput = document.getElementById('newsletter-email');
        if (emailInput) {
            emailInput.addEventListener('input', function() {
                var errorElement = document.getElementById('email-error');
                if (errorElement) {
                    errorElement.classList.remove('is-visible');
                    emailInput.setAttribute('aria-invalid', 'false');
                }
            });
        }
    }

    var statusElement = document.getElementById('status');
    if (statusElement) {
        setTimeout(function() {
            statusElement.textContent = 'Page loaded successfully';
        }, 1000);
    }

})(jQuery);
