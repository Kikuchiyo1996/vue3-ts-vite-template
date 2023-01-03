export const awardRouter = [
	{
		path: '/award-manage',
		name: 'award-manage',
		component: () => import('@/views/award-manage/index.vue'),
		meta: {
			title: 'award',
		},
	},
]
