module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true,
	},
	extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	globals: {
		axiosResponseType: true,
		AliyunUpload: true,
	},
	plugins: ['vue', '@typescript-eslint'],
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@', './src'],
					['@utils', './src/utils'],
					['@components', './src/components'],
				],
				extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
			},
		},
	},
	overrides: [
		{
			files: ['*.html'],
			processor: 'vue/.vue',
		},
	],
	rules: {
		camelcase: 'off', // 驼峰命名检测
		'vue/multi-word-component-names': 0, // 多单词命名检测
		'import/prefer-default-export': 'off', // 关闭首选默认导出
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn', // console配置
		'import/extensions': ['error', { vue: 'ignorePackages', js: 'nerve' }], // 导入js和vue文件关闭后缀检验
		'consistent-return': 'off', // 关闭函数末尾return
		'no-unused-vars': ['error', { varsIgnorePattern: '.*', args: 'none' }], // TS变量定义未使用
		'spaced-comment': 'off', //对象里边加注释
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'no-param-reassign': [
			2,
			{
				props: true,
				ignorePropertyModificationsFor: [
					'item', // 直接修改函数对象
				],
			},
		],
	},
}
