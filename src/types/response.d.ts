declare interface axiosResponseType<T = any> {
	code: number
	data: T
	msg: string
}
