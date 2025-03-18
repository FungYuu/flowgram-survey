import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pathSrc = path.resolve(__dirname, 'src');

const fePort = 1110;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 服务器设置
  server: {
    cors: true, // 默认启用并允许·任何源
    host: '0.0.0.0', // 指定服务器主机名
    port: fePort, // 指定服务端口号
    open: true, // 运行自动打开浏览器
    strictPort: true // 若3030端口被占用,直接结束项目
    // proxy: {
    //   '/api': {
    //     target: serverOrigin,
    //     changeOrigin: true,
    //     secure: false // 忽略自签名证书
    //   }
    // }
  },
  //这里进行配置别名
  resolve: {
    alias: {
      '@': pathSrc // @代替src
    }
  }
});
