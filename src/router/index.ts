import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { loginRouter } from './login'
import { awardRouter } from './award-manage'

const routes: RouteRecordRaw[] = [
	...awardRouter,
	...loginRouter,
	{
		path: '/404',
		component: () => import('@/views/error-page/404.vue'),
		meta: {
			title: '404',
			isShowHeader: false,
			isShowFooter: false,
		},
	},
	{
		path: '/403',
		meta: {
			title: '403',
			isShowHeader: false,
			isShowFooter: false,
		},
		component: () => import('@/views/error-page/403.vue'),
	},

	{
		path: '/:pathMatch(.*)*',
		redirect: '/award-manage',
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

// ! 顶部进度条
router.beforeEach(async (to) => {
	if (to.meta.title) {
		document.title = to.meta.title
	} else {
		document.title = 'Robosen'
	}
	if (!to.path.includes('/login')) {
		const token = localStorage.getItem('token')
		if (!token) return '/login'
	}

	NProgress.start()
})

router.afterEach(() => {
	NProgress.done()
})
export default router
