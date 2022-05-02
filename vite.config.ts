import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss({
      presets: [presetAttributify(), presetUno()],
    }),
  ],
});
