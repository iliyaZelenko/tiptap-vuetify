import commonjs from 'rollup-plugin-commonjs'
import VuePlugin from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'
import alias from 'rollup-plugin-alias'
// import resolve from 'rollup-plugin-node-resolve'
import { join } from 'path'

const isProduction = process.env.NODE_ENV === 'production'

export default (async () => ({
  input: join(__dirname, 'src/main.ts'),
  output: {
    file: join(__dirname, 'dist/bundle.js'),
    format: 'cjs'
  },
  plugins: [
    alias({
      resolve: ['.ts', '.js', '.vue'],
      '~': join(__dirname, 'src')
    }),
    // resolve(),
    typescript(),
    commonjs(),
    VuePlugin(/* VuePluginOptions */),
    isProduction && (await import('rollup-plugin-terser')).terser()
  ]
}))
