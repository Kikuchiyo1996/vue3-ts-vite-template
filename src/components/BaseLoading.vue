<template>
	<div v-show="isShowLoading" class="n-loading-wrapper">
		<div class="overlay">
			<n-spin class="n-loading" :show="isShowLoading"></n-spin>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { NSpin, useMessage } from 'naive-ui'
import { storeToRefs } from 'pinia'
import { useLoadingStore } from '@/store/loading'

const { isShowLoading } = storeToRefs(useLoadingStore())
window.$message = useMessage()
</script>
<style lang="scss">
.n-loading-wrapper {
	width: 100vw;
	height: 100vh;
}
.overlay {
	z-index: 3000;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.7);
}
.n-loading {
	position: absolute;
	z-index: 3001;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
