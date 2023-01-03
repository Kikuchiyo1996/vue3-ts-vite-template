import httpRequest from '@/axios/index'
import type { Method } from 'axios'
import type { awardResType } from './type'

export function awardApi(method: Method, payload: { sn: string }) {
	return httpRequest.request<axiosResponseType<awardResType>>({
		url: 'web/draw/acoount/manage',
		data: payload,
		method,
	})
}
export function writeoffApi(method: Method, payload: { sn: string }) {
	return httpRequest.request<axiosResponseType<{}>>({
		url: 'web/draw/acoount/writeoff',
		data: payload,
		method,
	})
}
