/// <reference types="vite/client" />
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}
/**
 *环境变量接口提示
 */
interface ImportMetaEnv {
	readonly VITE_APP_ENV: string
	readonly VITE_APP_BASE_PATH: string
	readonly VITE_APP_OUTPUT_DIR: string
	VITE_APP_API_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
