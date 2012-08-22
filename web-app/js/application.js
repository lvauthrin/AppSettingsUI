if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});

		var timeoutId;		

		var createNotification = function($) {
			return function(message) {
				$('#notifications').append('<div class="notification">' + message + '</div>');
			};
		}(jQuery);

		var saveSetting = function($) {
			return function(element) {
 			    var settingName = $(element).data('name');
				var settingValue = $(element).val();

				$.post("/AppSettingsUI/settings/save", {settingName: settingName, settingValue: settingValue})
				    .success(function() { $(element).parent().addClass('required-indicator'); })
				    .error(function() { $(element).parent().addClass('error'); });				
			};
		}(jQuery);
		
		var getInputName = function($) { 
			return function(input) { 
				return $(input).attr('name'); 
			}; 
		}(jQuery);

		// For each text field, add an unfocus hook which will save the value
		$('input[name=settingValue]').blur(function() {
			window.clearTimeout(timeoutId);
			saveSetting(this);
		}).keyup(function() {
			var that = this;
			window.clearTimeout(timeoutId);
			timeoutId = window.setTimeout(function() { saveSetting(that); }, 1000);
		}).focus(function() {
			$(this).parent().removeClass('error required-indicator');
		});

		$('.notification').on("click", function() { $(this).remove(); });
	})(jQuery);
}