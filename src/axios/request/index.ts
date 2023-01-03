import axios from 'axios'
import router from '@/router'
import { useLoadingStore } from '@/store/loading'
import type { AxiosInstance } from 'axios'
import type { requestInterceptors, customRequestConfig } from './types'

/**
 *  ! 控制loading显示隐藏
 *
 */
function controlLoading(showLoading: boolean) {
	const loadingStore = useLoadingStore()
	loadingStore.controlLoading(showLoading)
}

/**
 *  ! 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
	localStorage.clear()
	router.push({
		path: '/login',
		query: {
			redirect: router.currentRoute.value.fullPath,
		},
	})
}
/**
 * ! 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 * @param {String} message 请求失败的提示
 */
const errorHandle = async (status: number, msg: string) => {
	switch (status) {
		case 4003:
			toLogin()
			break
		default:
			break
	}
	if (status >= 3000 && status <= 6000) {
		window.$message.warning(msg)
	}
}
class HttpRequest {
	instance: AxiosInstance

	interceptors?: requestInterceptors

	showLoading: boolean

	errorToIntercept?: boolean

	constructor(config: customRequestConfig) {
		// 创建axios实例
		this.instance = axios.create(config)

		// 自定义拦截器及loading实例
		this.showLoading = true
		this.interceptors = config.customInterceptors

		// ! 全局请求拦截器
		this.instance.interceptors.request.use(
			(interceptorsConfig) => {
				if (this.showLoading) controlLoading(true)
				return interceptorsConfig
			},
			(err) => Promise.reject(err),
		)

		// ! 自定义拦截器
		this.instance.interceptors.request.use(
			this.interceptors?.requestInterceptor,
			this.interceptors?.requestInterceptorCatch,
		)
		// ! 全局响应拦截器
		this.instance.interceptors.response.use(
			(res) => {
				// 将loading移除
				setTimeout(() => {
					if (this.showLoading) controlLoading(false)
				}, 500)
				const { data } = res
				if (data.code !== 2000) {
					errorHandle(data.code, data.msg)
					return Promise.reject(res.data.msg)
				}
				return data
			},
			(err) => {
				if (this.showLoading) controlLoading(false)
				if (err.message.includes('timeout')) {
					window.$message.error('Request timed out, please check your network connection')
				}
				return Promise.reject(err)
			},
		)
	}

	request<T>(config: customRequestConfig): Promise<T> {
		return new Promise((resolve, reject) => {
			let axiosConfig = config
			if (axiosConfig.notShowLoading) this.showLoading = false

			// ! 针对单个请求的请求拦截
			if (axiosConfig.customInterceptors?.requestInterceptor) {
				axiosConfig = axiosConfig.customInterceptors.requestInterceptor(axiosConfig)
			}

			this.instance
				.request<any, T>(axiosConfig)
				.then((res) => {
					let responseData = res
					// ! 单个请求的响应拦截
					if (axiosConfig.customInterceptors?.responseInterceptor) {
						responseData = axiosConfig.customInterceptors.responseInterceptor<T>(res)
					}
					// 复原loading状态
					this.showLoading = true
					resolve(responseData)
				})
				.catch((err) => {
					this.showLoading = true
					reject(err)
				})
		})
	}

	get<T>(config: customRequestConfig): Promise<T> {
		return this.request<T>({ ...config, method: 'GET' })
	}

	post<T>(config: customRequestConfig): Promise<T> {
		return this.request<T>({ ...config, method: 'POST' })
	}

	delete<T>(config: customRequestConfig): Promise<T> {
		return this.request<T>({ ...config, method: 'DELETE' })
	}

	patch<T>(config: customRequestConfig): Promise<T> {
		return this.request<T>({ ...config, method: 'PATCH' })
	}

	put<T>(config: customRequestConfig): Promise<T> {
		return this.request<T>({ ...config, method: 'PUT' })
	}
}

export { HttpRequest }
