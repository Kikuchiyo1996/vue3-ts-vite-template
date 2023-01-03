/* eslint-disable no-param-reassign */
// 全局指令
// eslint-disable-next-line func-names
const isSupportWebp = (function () {
	try {
		return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0
	} catch (err) {
		return false
	}
})()

export default (app: any) => {
	// 图片懒加载指令
	app.directive('lazypro', {
		mounted(el: any, binding: any) {
			// vue2.0 inserted vue3.0 mounted
			const observer = new IntersectionObserver(
				([{ isIntersecting }]) => {
					if (isIntersecting) {
						// isIntersecting判断是否进入视图
						observer.unobserve(el) // 进入视图后，停止监听
						el.onerror = () => {
							el.src = 'https://en-oss-static.robosen.com/public1/imgFailed.png'
							el.style.width = '240px'
							el.style.height = '240px'
						}
						if (isSupportWebp) {
							const lastIndex = binding.value.lastIndexOf('.')
							el.src = `${binding.value.slice(0, lastIndex)}.webp`
						} else {
							el.src = binding.value // 进入视图后，把指令绑定的值赋值给src属性，显示图片
						}
					}
				},
				{
					threshold: 0.01, // 当图片img元素占比视图0.01时 el.src = binding.value
				},
			)
			observer.observe(el) //观察指令绑定的dom
		},
	})
}
