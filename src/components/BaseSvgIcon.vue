<template>
	<svg aria-hidden="true" class="svg-icon" :width="props.width" :height="props.height">
		<use :xlink:href="symbolId" :fill="props.color" />
	</svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
	prefix: {
		type: String,
		default: 'icon',
	},
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: '#333',
	},
	width: {
		type: String,
		default: '50px',
	},
	height: {
		type: String,
		default: '50px',
	},
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style lang="scss">
.svg-icon {
	vertical-align: middle;
}
</style>
