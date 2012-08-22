package appsettingsui

class AppSettingService {

	static scope = "singleton"
	
    def listSettings() {
		AppSetting.list(sort: "id")
    }

	def save(setting) {
		def oldSetting = AppSetting.read(setting.id)
		oldSetting.discard()
		setting.merge()
		return oldSetting
	}

}
