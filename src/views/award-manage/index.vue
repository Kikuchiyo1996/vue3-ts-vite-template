<template>
	<div class="award-manage">
		<n-h1 class="text-center">用户核销</n-h1>

		<div class="filter-wrapper">
			<n-input v-model:value="snNumber" type="text" placeholder="请输入SN码" />
			<n-button class="search-btn" type="primary" @click="getAwardData">搜索</n-button>
			<n-popconfirm @positive-click="handlePositiveClick">
				<template #trigger>
					<n-button v-show="snNumber" type="error">核销</n-button>
				</template>
				确认核销{{ snNumber }}吗
			</n-popconfirm>
		</div>
		<n-data-table v-if="tableData.length && !isMobile" :columns="columns" :data="tableData" :single-line="false" />
		<ul v-if="isMobile && tableData.length">
			<li v-for="item in columns" :key="item.key" class="card-container">
				<!-- 标题 -->
				<p>
					<n-button quaternary type="primary">
						{{ item.title }}
					</n-button>
				</p>
				<!-- 列表 -->
				<p v-if="!(item.key === 'win_pic')" class="list-content" style="color: #d54461">
					<span>{{ listFilter(item.key) }}</span>
				</p>
				<p v-else class="list-content">
					<img :src="tableData[0][item.key]" alt="" width="150" height="150" />
				</p>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts" name="award-manage">
import { ref, h, reactive, computed } from 'vue'
import { NDataTable, NPopconfirm } from 'naive-ui'
import { awardApi, writeoffApi } from '@/axios/api/award-manage'
import type { awardResType } from '@/axios/api/award-manage/type'

const snNumber = ref('')
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const tableData = reactive([] as Array<awardResType>)
const getAwardData = async () => {
	const { data } = await awardApi('POST', { sn: snNumber.value })
	tableData.length = 0
	tableData.push(data)
}

const handlePositiveClick = async () => {
	if (!snNumber.value) {
		window.$message.success('请输入sn码')
		return
	}
	await writeoffApi('POST', { sn: snNumber.value })
	window.$message.success('核验成功')
}
const columns = [
	{
		title: 'SN',
		key: 'sn',
		align: 'center',
	},
	{
		title: '中奖等级',
		key: 'prize_level',
		align: 'center',
	},
	{
		title: '奖券',
		key: 'win_pic',
		align: 'center',
		render(row: awardResType) {
			return h('img', {
				src: row.win_pic,
				class: 'win-pic-style',
				width: '200',
				height: '200',
			})
		},
	},

	{
		title: '用户名',
		key: 'user',
		align: 'center',
	},
	{
		title: '地址',
		key: 'address',
		align: 'center',
	},
	{
		title: '手机号',
		key: 'phone',
		align: 'center',
	},
	{
		title: '是否核验',
		key: 'write_off',
		align: 'center',
		render(row: awardResType) {
			return h('span', {}, row.write_off ? '是' : '否')
		},
	},
]
const listFilter = (state: keyof awardResType) => {
	if (state === 'write_off') {
		return tableData[0].write_off ? '是' : '否'
	}
	return tableData[0][state]
}
</script>

<style lang="scss" scoped>
.award-manage {
	max-width: 900px;
	margin: auto;
	padding: 60px 20px;
	.filter-wrapper {
		display: flex;
		margin-bottom: 40px;
	}
	.search-btn {
		margin: 0 5px;
	}

	.card-container {
		min-height: 60px;
		margin-top: 40px;
		display: flex;
		align-items: center;
		box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
		border-radius: 10px;

		.list-content {
			margin-left: 80px;
		}
	}

	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
}
</style>
