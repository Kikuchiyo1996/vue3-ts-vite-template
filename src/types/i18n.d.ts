/**
 * you need to import the some interfaces
 */
import { DefineLocaleMessage } from 'vue-i18n'
import type { HomeData } from '@/lang/home/types'
import type {
	ProductSupportTypes,
	TechnicalSupportTypes,
	DownloadTypes,
	WarrantyInformationTypes,
	ProductFAQTypes,
} from '@/lang/technical-support/types'

declare module 'vue-i18n' {
	// eslint-disable-next-line no-shadow
	export interface DefineLocaleMessage {
		home: HomeData
		download: DownloadTypes
		technicalSupport: TechnicalSupportTypes
		warrantyInformation: WarrantyInformationTypes
		technicalSupport: ProductSupportTypes
		productFAQ: ProductFAQTypes
		// shippingPolicy: ShippingPolicyTypes
		// returnPolicy: ReturnPolicyTypes
	}
}
