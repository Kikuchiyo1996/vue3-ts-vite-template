//登录
export interface LoginData {
	loginTitle: string
	describe: string
	loginBtn: string
	register: string
	reset: string
	successTip: string
	clauseText: string
	agreementText: string
	privacyPolicy: string
	chainingText: string
	inputData: {
		rules: any
		accountPlaceholder: string
		passwordPlaceholder: string
	}
}

//注册账号
export interface LoginRegister {
	registerTitle: string
	nextBtn: string
	sendCodeBtn: string
	loginBtn: string
	AutologText: string
	sendSuccessTip: string
	createBtn: string
	clauseText: string
	agreementText: string
	privacyPolicy: string
	chainingText: string
	emailSubscriptions: string
	step: string
	step3: string
	errorTip1: string
	errorTip2: string
	errorTip3: string
	inputData1: {
		rules: any
		accountPlaceholder: string
		codePlaceholder: string
	}
	inputData2: {
		passwordPlaceholder: string
		checkPassPlaceholder: string
	}
}

//修改密码||忘记密码

export interface LoginReset {
	title: string
	step1: string
	step2: string
	step3: string
	sendCodeBtn: string
	nextBtn: string
	toLogin: string
	loginBtn: string
	sendSuccessTip: string
	resetSuccessTip: string
	errorTip1: string
	errorTip2: string
	errorTip3: string
	inputData1: {
		accountPlaceholder: string
		codePlaceholder: string
		rules: any
	}
	inputData2: {
		passwordPlaceholder: string
		checkPassPlaceholder: string
	}
}

//登录模块数据
export interface LoginModuleText {
	loginData: LoginData
	loginRegister: LoginRegister
	loginReset: LoginReset
}
