$(function(){
			var overlay = $('<div id="overlay" role="presentation"></div>');
			overlay.show();
			overlay.appendTo(document.body);
			$('.popup').attr('role', 'dialog').attr('aria-modal', 'true').show();
			
			// Focus management for accessibility
			$('.popup').find('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').first().focus();
			
			$('.close').click(function(){
				$('.popup').hide();
				overlay.appendTo(document.body).remove();
				return false;
			});

			// Keyboard accessibility - close on Escape key
			$(document).on('keydown', function(e) {
				if (e.key === 'Escape' && $('.popup').is(':visible')) {
					$('.popup').hide();
					overlay.remove();
				}
			});

			$('.x').click(function(){
				$('.popup').hide();
				overlay.appendTo(document.body).remove();
				return false;
			});
			
			// Make close button keyboard accessible
			$('.x, .close').attr('role', 'button').attr('tabindex', '0').attr('aria-label', 'Close dialog');
			$('.x, .close').on('keydown', function(e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					$(this).click();
				}
			});
		});