import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'
import importToCDN from 'vite-plugin-cdn-import'
import compressPlugin from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { VuePath, AxiosPath, VueRouter, VueDemi, Pinia, VueI18n } from './src/cdn/index'

export default ({ mode }) => {
	const diffMode = loadEnv(mode, process.cwd())
	const isDev = mode === 'development'
	return defineConfig({
		/**
		 * ! 环境变量
		 */
		base: diffMode.VITE_APP_PUBLIC_PATH,
		/**
		 * ! 全局sass变量
		 */
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "./src/styles/variables.scss";`,
				},
			},
		},

		plugins: [
			vue(),
			/**
			 * ! 打包分析
			 */
			visualizer({
				open: false,
				gzipSize: true,
				brotliSize: true,
			}),
			/**
			 * ! 超过5KB开启Gzip
			 */
			compressPlugin({
				threshold: 5000,
			}),
			// ! 图片压缩
			!isDev &&
				viteImagemin({
					gifsicle: {
						optimizationLevel: 7,
						interlaced: false,
					},
					optipng: {
						optimizationLevel: 7,
					},
					mozjpeg: {
						quality: 20,
						progressive: true,
					},
					pngquant: {
						quality: [0.8, 0.9],
						speed: 4,
					},
					svgo: {
						plugins: [
							{
								name: 'removeViewBox',
							},
							{
								name: 'removeEmptyAttrs',
								active: false,
							},
						],
					},
				}),
			/**
			 * ! CDN引入并排除打包
			 */
			importToCDN({
				modules: [
					{
						name: 'vue',
						var: 'Vue',
						path: VuePath,
					},
					{
						name: 'axios',
						var: 'axios',
						path: AxiosPath,
					},

					{
						name: 'vue-router',
						var: 'VueRouter',
						path: VueRouter,
					},
					{
						name: 'vue-demi',
						var: 'VueDemi',
						path: VueDemi,
					},
					{
						name: 'pinia',
						var: 'Pinia',
						path: Pinia,
					},
					{
						name: 'vue-i18n',
						var: 'VueI18n',
						path: VueI18n,
					},
				],
			}),
			// ! svg
			createSvgIconsPlugin({
				// 指定需要缓存的图标文件夹
				iconDirs: [path.resolve(process.cwd(), 'src/icons')],
				// 指定symbolId格式
				symbolId: 'icon-[dir]-[name]',
			}),
		],
		/**
		 * ! 打包配置
		 */
		build: {
			sourcemap: isDev, // 源文件 便于定位bug
			outDir: diffMode.VITE_APP_OUTPUT_DIR,
			rollupOptions: {
				/**
				 * ! 打包输出文件目录和代码拆分
				 */
				output: {
					chunkFileNames: 'static/js/[name]-[hash].js',
					entryFileNames: 'static/js/[name]-[hash].js',
					assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
					manualChunks(id, { getModuleInfo }) {
						// 这里可以按路由拆分publicDir
						/* 	if (id.includes('src/router_a')) {
							return 'router_a'
						} */
						// node_modules
						if (id.includes('node_modules')) {
							return 'vendor'
						}
						// 	被多处引用的组件
						const reg = /(.*)\/src\/components\/(.*)/
						if (reg.test(id)) {
							const importersLen = getModuleInfo(id).importers.length
							if (importersLen > 1) {
								return 'common'
							}
						}
					},
				},
			},
		},
		/**
		 * ! 项目别名
		 */
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
				'@components': resolve(__dirname, 'src/components'),
				'@utils': resolve(__dirname, 'src/utils'),
			},
			extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
		},
		/**
		 * ! 开发服务器
		 */
		server: {
			port: 4000,
			open: true,
			host: true,
			https: true,
			proxy: {
				'/api': {
					target: 'https://test-robosenmall.robosen.cn/',
					changeOrigin: true,
					rewrite: (servePath) => servePath.replace(/^\/api/, ''),
				},
			},
		},
	})
}
