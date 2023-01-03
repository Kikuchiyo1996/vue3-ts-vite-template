import { createI18n } from 'vue-i18n'
import LocalCache from '@utils/cache'
import messages from './language-pack/index'

// ! 默认语言=>读取浏览器的语言

const { language } = navigator

let activeLang: string = ''
switch (language) {
	case 'en-GB':
		activeLang = 'uk'
		break
	case 'en-US':
		activeLang = 'us'
		break
	case 'fr':
		activeLang = 'fr'
		break

	default:
		activeLang = 'us'
		break
}

if (!LocalCache.getCache('currentLang')) LocalCache.setCache('currentLang', `${activeLang}`)

const i18n = createI18n({
	globalInjection: true,
	legacy: false,
	locale: LocalCache.getCache('currentLang'),
	fallbackLocale: 'us',
	messages,
})

export default i18n
