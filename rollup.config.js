import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'
import alias from 'rollup-plugin-alias'
import resolve from 'rollup-plugin-node-resolve'
import { join } from 'path'

const isProduction = process.env.BUILD === 'production'

export default (async () => [
  // You can also get a more optimized wrapper by creating dedicated builds for the formats “cjs” (Node), “amd” or “iife” (script tag)
  getConfig({
    output: {
      file: join(__dirname, 'dist/bundle-umd.js'),
      format: 'umd',
      esModule: true
    }
    // plugins: [
    //   // оптимизация
    //   isProduction && (await import('rollup-plugin-terser')).terser()
    // ]
  }),
  getConfig({
    output: {
      file: join(__dirname, 'dist/bundle-esm.js'),
      format: 'esm',
      // это отдельная сборка под ES модули
      esModule: true
    }
  }),
  getConfig({
    output: {
      file: join(__dirname, 'dist/bundle-cjs.js'),
      format: 'cjs'
    }
  }),
  getConfig({
    output: {
      file: join(__dirname, 'dist/bundle-iife.js'),
      format: 'iife'
    }
  })
])

function getConfig ({
  output: {
    file,
    format,
    name = undefined,
    esModule = false
  },
  plugins = []
}) {
  return {
    input: join(__dirname, 'src/main.ts'),
    output: {
      esModule,
      file,
      format,
      exports: 'named',
      // используется в umd и в iife
      name: 'tiptapVuetify',
      globals: {
        vue: 'Vue',
        // https://github.com/vuejs/vue-class-component/blob/master/build/build.js
        // 'vue-class-component': 'VueClassComponent',
        // https://github.com/kaorun343/vue-property-decorator/blob/master/rollup.config.js
        // 'vue-property-decorator': 'VuePropertyDecorator',
        'tiptap': 'tiptap',
        // Походу так и есть: https://github.com/scrumpy/tiptap/blob/master/build/packages/config.js#L44
        'tiptap-extensions': 'tiptap', // TODO tiptapExtensions
        'vuetify': 'Vuetify'
      }
    },
    external: [
      'vue',
      // 'vue-class-component',
      // 'vue-property-decorator',
      'tiptap',
      'tiptap-extensions',
      'vuetify'
    ],
    plugins: [
      alias({
        resolve: ['.ts', '.js', '.vue'],
        '~': join(__dirname, 'src')
      }),
      commonjs(),
      typescript(),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      }),
      vue({
        defaultLang: { script: 'ts' },
        // Inject CSS in JavaScript. Setting css: false would extract styles in a .css file.
        css: true,
      }),
      ...plugins
    ]
  }
}
