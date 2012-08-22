package appsettingsui

class SettingsController {

	static scope = "singleton"
	
	def appSettingService
	
    def index() {
		[settings: appSettingService.listSettings()]
	}

	def save() {
		def setting = new AppSetting(value: params["settingValue"])
		setting.id = params["settingName"]
		def oldSetting = appSettingService.save(setting)
		render(contentType: 'text/json') {[
			'setting': oldSetting,
		]}
	}

}