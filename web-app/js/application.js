if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});

		var timeoutId;		

		var saveSetting = function($) {
			return function(element) {
 			    var settingName = $(element).data('name');
				var settingValue = $(element).val();

				$.post("/AppSettingsUI/settings/save", {settingName: settingName, settingValue: settingValue})
				    .success(function() { $(element).parent().addClass('required-indicator'); })
				    .error(function() { $(element).parent().addClass('error'); });				
			};
		}(jQuery);

		$('input[name=settingValue]').on('input', function() {
			var that = this;
			window.clearTimeout(timeoutId);
			timeoutId = window.setTimeout(function() { saveSetting(that); }, 1000);
		}).focus(function() {
			$(this).parent().removeClass('error required-indicator');
		});
	})(jQuery);
}