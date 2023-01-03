class LocalCache {
	static setCache(key: string, value: any) {
		window.localStorage.setItem(key, JSON.stringify(value))
	}

	static getCache(key: string) {
		// obj => string => obj
		const value = window.localStorage.getItem(key)
		if (value) {
			return JSON.parse(value)
		}
	}

	static deleteCache(key: string) {
		window.localStorage.removeItem(key)
	}

	static clearCache() {
		window.localStorage.clear()
	}
}

export default LocalCache
