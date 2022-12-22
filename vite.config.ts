import { defineConfig, normalizePath } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import viteEslint from 'vite-plugin-eslint';

const variablePath = normalizePath(path.resolve('/src/assets/variable.scss'));
// https://vitejs.dev/config/
export default defineConfig({
    // root: path.join(__dirname, 'src'), // 修改项目根目录
    plugins: [react(),viteEslint()],
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData 的内容会在每个 scss 文件的开头自动注入
                additionalData: `@import "${variablePath}"; $font-size: 24px;`,
            },
        },
        modules: {
            // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
            // 其中，name 表示当前文件名，local 表示类名
            generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
        postcss: {
            plugins: [
                // 自动为不同的目标浏览器添加样式前缀，解决的是浏览器兼容性的问题。
                autoprefixer({
                    // 指定目标浏览器
                    overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
                }),
            ],
        },
    },
});
