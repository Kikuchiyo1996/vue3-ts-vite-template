export interface awardResType {
	[index: string]: string | number | boolean
	/**
	 * 邮寄地址
	 */
	address: string
	/**
	 * 手机号
	 */
	phone: string
	/**
	 * 中奖等级
	 */
	prize_level: number
	/**
	 * 中奖SN码
	 */
	sn: string
	/**
	 * 用户名
	 */
	user: string
	/**
	 * 中奖SN图片
	 */
	win_pic: string
	/**
	 * 是否已核销
	 */
	write_off: boolean
}
