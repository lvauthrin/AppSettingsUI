package appsettingsui

class AppSettingService {

	static scope = "singleton"
	
    def listSettings() {
		AppSetting.list()
    }

	def save(setting) {
		setting.merge()
	}

}
