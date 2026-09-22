import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";
const pathResolve = (dir: any) => resolve(__dirname, dir);
// https://jsy.xjjs.gov.cn
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE_URL || "/",
    server: {
      proxy: {
        "/api": {
          target: "http://192.168.1.104:8888/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        },
      },
    },
    build: {
      outDir: "bigScreen",
      assetsDir: "static",
      target: ["es2015"],
    },
    plugins: [
      vue(),
      legacy({
        targets: ["ie >= 11", "chrome >= 60"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
    ],
    resolve: {
      alias: {
        "@": pathResolve("./src"),
      },
    },
  };
});
