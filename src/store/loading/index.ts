import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('login', {
	state: () => ({
		isShowLoading: false,
	}),

	actions: {
		controlLoading(isShowLoading: boolean) {
			this.isShowLoading = isShowLoading
		},
	},
	getters: {},
})
