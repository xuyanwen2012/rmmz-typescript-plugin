import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'iife',
    sourcemap: true,
  },
  plugins: [typescript()],
};
