import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ShanSan',
			logo: {
				src: './src/assets/logo.jpg',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			defaultLocale: 'en',
			locales: {
				// 英文文档在 `src/content/docs/en/` 中。
				en: {
					label: 'English',
				},
				// 简体中文文档在 `src/content/docs/zh-cn/` 中。
				'zh-cn': {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			sidebar: [
				{
					label: 'Projects',
					items: [
						{ label: 'My Projects', link: 'projects' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
