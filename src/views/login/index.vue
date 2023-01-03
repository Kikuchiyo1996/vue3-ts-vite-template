<template>
	<div class="login-wrapper">
		<div class="login">
			<n-h1 class="title">Robosen</n-h1>
			<n-card size="large" style="--padding-bottom: 30px">
				<n-h2 style="--font-weight: 400">Sign-in</n-h2>
				<!-- 登录表单 -->
				<n-form size="large" :rules="rules" :model="model">
					<n-form-item-row label="Phone" path="phone">
						<n-input v-model:value="model.phone" placeholder="Input your phone" />
					</n-form-item-row>
					<n-form-item-row label="Password" path="password">
						<n-input v-model:value="model.password" type="password" placeholder="Input your password" />
					</n-form-item-row>
				</n-form>
				<!-- 登录 -->
				<n-button type="primary" size="large" block :loading="loading" :disabled="disabled" @click="handleLogin">
					Sign in
				</n-button>
				<br />
			</n-card>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginApi } from '@/axios/api/login'

const $router = useRouter()
const rules = {
	phone: {
		required: true,
		message: '请填入电话号码',
		trigger: 'blur',
	},
	password: {
		required: true,
		message: '请输入密码',
		trigger: 'blur',
	},
}

const model = ref({
	phone: '',
	password: '',
})

const loading = ref(false)

const disabled = computed<boolean>(() => model.value.phone === '' || model.value.password === '')

const handleLogin = async () => {
	loading.value = true
	try {
		const {
			data: { token },
		} = await loginApi('POST', { phone: model.value.phone, SecretKey: model.value.password })
		localStorage.setItem('token', token)
		loading.value = false
		$router.push('/award-manage')
	} catch (error: any) {
		window.$message.warning(error)
		loading.value = false
	}
}
</script>

<style lang="scss" scoped>
.login-wrapper {
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.login {
	.title {
		font-size: 30px;
		font-weight: 100;
		margin-bottom: 40px;
	}

	.n-h1 {
		text-align: center;
		letter-spacing: 5px;
		opacity: 0.8;
	}

	.n-card {
		margin: 0 auto;
		max-width: 380px;
		box-shadow: var(--box-shadow);
	}
}
</style>
