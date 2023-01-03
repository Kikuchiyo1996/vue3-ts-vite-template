// service统一出口
import { HttpRequest } from './request'

const cmRequest = new HttpRequest({
	baseURL: import.meta.env.VITE_APP_API_URL,
	timeout: 8000,
	customInterceptors: {
		requestInterceptor: (config) => {
			const axiosConfig = config
			// ! 携带token的拦截
			const token = localStorage.getItem('token')
			if (token && axiosConfig.headers) {
				axiosConfig.data.token = token
			}
			// ! 调整参数位置
			if (config.payload) {
				if (config.method === 'delete' || config.method === 'get') {
					axiosConfig.params = axiosConfig.payload
				} else {
					axiosConfig.data = axiosConfig.payload
				}
			}

			return axiosConfig
		},
		requestInterceptorCatch: (err) => Promise.reject(err),
		responseInterceptor: (res) => res,
		responseInterceptorCatch: (err) => Promise.reject(err),
	},
})

export default cmRequest
