import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pathSrc = path.resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //这里进行配置别名
  resolve: {
    alias: {
      '@': pathSrc // @代替src
    }
  }
});
