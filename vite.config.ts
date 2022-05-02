import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import unocss from 'unocss/vite';
import { presetAttributify, presetUno, transformerVariantGroup } from 'unocss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    unocss({
      presets: [presetAttributify(), presetUno()],
      theme: {
        colors: {
          black: 'hsl(0, 0, 0)',
          magenta: {
            100: 'hsl(300, 24%, 96%)',
            300: 'hsl(303, 10%, 53%)',
            700: 'hsl(300, 43%, 22%)',
          },
          pink: 'hsl(333, 80%, 67%)',
          white: 'hsl(0, 0%, 100%)',
        },
        fontFamily: {
          spartan: ['League Spartan', 'sans-serif'],
        },
      },
      transformers: [transformerVariantGroup()],
    }),
  ],
});
