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
		appSettingService.save(setting)
		[setting: setting]
	}

}