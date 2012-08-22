import appsettingsui.AppSetting

class BootStrap {

	def init = { servletContext ->
		// Check whether the test data already exists.
		if (!AppSetting.count()) {
			new AppSetting(id: "Test Key 1", value: "Test Value 1").save(failOnError: true)
			new AppSetting(id: "Test Key 2", value: "Test Value 2").save(failOnError: true)
		}
	}
	
    def destroy = {
    }

}
