if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).css({opacity: 0, visibility: "hidden"}).animate({opacity: 1.0}, 200);
		}).ajaxStop(function() {
			$(this).css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 200);
		});

		var timeoutId;		

		var addAction = function(message) {
			$('#actions').append('<p class="message">' + message + '</p>');
		}

		var saveSetting = function($) {
			return function(element) {
 			    var settingName = $(element).data('name');
				var settingValue = $(element).val();

				$.post("/AppSettingsUI/settings/save", {settingName: settingName, settingValue: settingValue})
				    .success(function(data) {
				    	$(element).parent().addClass('required-indicator');
				    	addAction(settingName + ' changed from ' + settingValue + ' to ' + data.setting.value + '.');
				    }).error(function(data) {
				    	console.log(data);
				    	$(element).parent().addClass('error');
				    	addAction('Error occured: [' + data.status + ']: ' + data.statusText);
				    });				
			};
		}(jQuery);
		
		$('input[name=settingValue]').on('input', function(e) {
			console.log(e);
			var that = this;
			window.clearTimeout(timeoutId);
			timeoutId = window.setTimeout(function() { saveSetting(that); }, 1000);
		}).focus(function() {
			$(this).parent().removeClass('error required-indicator');
		});
	})(jQuery);
}