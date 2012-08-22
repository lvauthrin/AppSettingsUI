dataSource {
    pooled = true
}
hibernate {
    cache.use_second_level_cache = true
    cache.use_query_cache = false
    cache.region.factory_class = 'net.sf.ehcache.hibernate.EhCacheRegionFactory'
}
// environment specific settings
environments {
    development {
        dataSource {
            driverClassName = "org.h2.Driver"
            dbCreate = "create-drop" // one of 'create', 'create-drop', 'update', 'validate', ''
            username = "sa"
            password = ""
            url = "jdbc:h2:mem:devDb;MVCC=TRUE;LOCK_TIMEOUT=10000"
        }
    }
    test {
        dataSource {
            driverClassName = "org.h2.Driver"
            dbCreate = "create-drop"
            username = "sa"
            password = ""
            url = "jdbc:h2:mem:testDb;MVCC=TRUE;LOCK_TIMEOUT=10000"
        }
    }
    production {
        dataSource {
			jndiName = "java:comp/env/jdbc/thumbplay"
        }
    }
}
