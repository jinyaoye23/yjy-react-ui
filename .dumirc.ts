import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'YJY',
     // 配置顶部导航
    nav: [
      { title: '指南', link: '/get-started' },
      { title: '组件', link: '/components/Button' },
    ],
  },
});
