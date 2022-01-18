import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import pkg from './package.json';

const config = {
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, './src/lib.js'),
      name: pkg.name,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};

export default config;
