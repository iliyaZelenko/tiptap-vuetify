import TiptapVuetify from '~/components/TiptapVuetify.vue'
import { TiptapVuetifyPlugin } from './plugin'

export * from '~/extensions/nativeExtensions/index'
export { TiptapVuetify }
export { TiptapVuetifyPlugin }

// @ts-ignore
if (process.env.ES_BUILD === 'false') {
  // авто установка (полезно если ставится через CDN)
  (function autoInstall () {
    let globalScope: any = null

    if (typeof window !== 'undefined') {
      globalScope = window
    } else if (typeof global !== 'undefined') {
      // @ts-ignore
      globalScope = global
    }
    if (globalScope && globalScope.Vue) {
      // Automatic installation if Vue has been added to the global scope.
      globalScope.Vue.use(TiptapVuetifyPlugin, {
        vuetify: globalScope.vuetify,
        ...globalScope.tiptapVuetifyPluginOptions
      })
      globalScope.Vue.component('tiptap-vuetify', TiptapVuetify)
    }
  })()
}
