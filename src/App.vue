<template>
	<n-config-provider :locale="zhCN" :date-locale="dateZhCN">
		<n-message-provider>
			<router-view></router-view>
			<BaseLoading />
		</n-message-provider>
	</n-config-provider>
</template>
<script lang="ts" setup name="App">
import BaseLoading from '@/components/BaseLoading.vue'
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui'
</script>
<style scoped lang="scss"></style>
