import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';
const pathResolve = (dir) => resolve(__dirname, dir);
// https://jsy.xjjs.gov.cn
export default defineConfig({
  base:'./',
  server: {
    proxy: {
      '/api': {
        target: 'https://xxx.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  },
  build: {
    outDir: 'dongtai-one-phone',
    assetsDir: 'static',
    target: ['es2015']
  },
  plugins: [
    vue(),
    legacy({
      targets: ['ie >= 11', 'chrome >= 60'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
  ],
  resolve: {
    alias: {
       '@': pathResolve("./src")
    }
  }
});
