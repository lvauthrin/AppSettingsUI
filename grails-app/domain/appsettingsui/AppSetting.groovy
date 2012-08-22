package appsettingsui

class AppSetting {

	String id
	String value
	
    static constraints = {
		id(blank: false)
		value(blank: false)
    }

	static mapping = {
		table 'jboss_global_app_settings'
		id column: 'key', generator: 'assigned'
		version false
	}

}
