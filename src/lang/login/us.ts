import type { LoginModuleText } from './types'

const loginModuleText: LoginModuleText = {
	loginData: {
		loginTitle: 'Sign-in',
		describe: 'Log in to your Robosen account to enjoy professional services',
		loginBtn: 'Log in',
		register: 'Create an account',
		reset: 'Forgot password',
		successTip: 'Login successful',
		clauseText: `I agree to the Robosen account use`,
		agreementText: `Agreement`,
		privacyPolicy: 'Privacy Policy.',
		chainingText: 'and',
		inputData: {
			accountPlaceholder: 'Mail',
			passwordPlaceholder: 'Password',
			rules: {
				account: [
					{
						required: true,
						message: 'The account cannot be empty',
						trigger: 'blur',
					},
					{
						pattern:
							/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
						message: 'Wrong format of Mail number',
						trigger: 'blur',
					},
				],
				password: [
					{
						required: true,
						message: 'The password cannot be empty',
						trigger: 'blur',
					},
				],
			},
		},
	},

	loginRegister: {
		registerTitle: 'Create an account',
		step: 'Create your Robosen account to enjoy professional services',
		step3: 'Log in to your Robosen account soon and enjoy professional services',
		nextBtn: 'Next',
		sendCodeBtn: 'send',
		loginBtn: 'Log in immediately',
		AutologText: 'Autolog in within',
		sendSuccessTip: 'Sent successfully !',
		createBtn: 'Create',
		clauseText: `I agree to the Robosen account use`,
		agreementText: `Agreement`,
		privacyPolicy: 'Privacy Policy.',
		chainingText: 'and',
		emailSubscriptions: 'Subscribe to the Robosen for the latest news and offers',
		errorTip1: 'The password cannot be empty',
		errorTip2: 'Password limit combination of alphanumeric and numeric (6-16)',
		errorTip3: '	The two entered passwords do not match !',
		inputData1: {
			accountPlaceholder: 'Mail',
			codePlaceholder: 'Verification Code',
			rules: {
				email: [
					{
						required: true,
						message: 'The account cannot be empty',
						trigger: 'blur',
					},
					{
						pattern:
							/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
						message: 'Wrong format of Mail number',
						trigger: 'blur',
					},
				],
				verificationCode: [
					{
						required: true,
						message: 'The password cannot be empty',
						trigger: 'blur',
					},
				],
			},
		},
		inputData2: {
			passwordPlaceholder: 'Password',
			checkPassPlaceholder: 'Confirm Password',
		},
	},
	loginReset: {
		title: 'Reset password',
		step1: 'After verifying the mobile number, you can reset the password',
		step2: `Please enter a new password,at least 6 characters`,
		step3: `The password is about to reset. You need to log in again`,
		sendCodeBtn: 'send',
		nextBtn: 'Next',
		loginBtn: 'Log in immediately',
		sendSuccessTip: 'Sent successfully !',
		resetSuccessTip: 'Password reset succeeded',
		toLogin: 'Will return to login',
		errorTip1: 'The password cannot be empty',
		errorTip2: 'Password limit combination of alphanumeric and numeric (6-16)',
		errorTip3: '	The two entered passwords do not match !',

		inputData1: {
			accountPlaceholder: 'Mail',
			codePlaceholder: 'Verification code',
			rules: {
				email: [
					{
						required: true,
						message: 'The account cannot be empty',
						trigger: 'blur',
					},
					{
						pattern:
							/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
						message: 'Wrong format of Mail number',
						trigger: 'blur',
					},
				],
				verificationCode: [
					{
						required: true,
						message: 'The password cannot be empty',
						trigger: 'blur',
					},
				],
			},
		},
		inputData2: {
			passwordPlaceholder: 'New password',
			checkPassPlaceholder: 'Confirm password',
		},
	},
}

export default loginModuleText
