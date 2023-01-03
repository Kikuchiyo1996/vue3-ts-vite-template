import httpRequest from '@/axios/index'
import type { Method } from 'axios'
import type { LoginResType } from './type'

// 产品信息
export function loginApi(method: Method, payload: { SecretKey: string; phone: string }) {
	return httpRequest.request<axiosResponseType<LoginResType>>({
		url: 'web/draw/acoount',
		data: payload,
		method,
	})
}
