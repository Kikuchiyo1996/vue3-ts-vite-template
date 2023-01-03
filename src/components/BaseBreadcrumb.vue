<template>
	<div class="place"></div>
	<div class="Breadcrumb">
		<el-breadcrumb class="Breadcrumb-content w" separator=">">
			<el-breadcrumb-item v-for="item in levelList.data" :key="item.path" :to="item.path">
				<span>{{ item.meta?.title }}</span>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script setup lang="ts" name="Breadcrumb">
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const $router = useRouter()
const levelList = reactive({ data: [] as Array<RouteRecordRaw> })

const getBreadcrumb = () => {
	// 动态修改产品信息页面的meta
	$router.currentRoute.value.matched.forEach((item) => {
		const routeInfo = item
		if (item.name === 'frequently-asked-questions-info') {
			routeInfo.meta.title = $router.currentRoute.value.query.productName as string
		}
	})
	// 匹配历史路由
	levelList.data = $router.currentRoute.value.matched.filter((item) => item.meta && item.meta.title)
}
getBreadcrumb()
watch(
	() => $router.currentRoute.value.path,
	(path) => {
		if (path.startsWith('/redirect/')) {
			return
		}
		getBreadcrumb()
	},
)
</script>

<style lang="scss" scoped>
.place {
	height: 60px;
}
.Breadcrumb {
	width: 100%;
	background: #eaeaea;
	font-family: MiSans-Demibold;
	position: fixed;
	top: 60px;
	z-index: 10;
	.Breadcrumb-content {
		height: 60px;
		line-height: 60px;
	}
}
</style>
