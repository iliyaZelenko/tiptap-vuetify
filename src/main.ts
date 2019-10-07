import TiptapVuetify from '~/components/TiptapVuetify.vue'
import theme from '~/configs/theme'
import { OptionsInterface, PluginInterface } from '../types'
import ConsoleLogger from '~/logging/ConsoleLogger'

export * from '~/extensions/nativeExtensions/index'
export { TiptapVuetify }

// дефолтный экспорт не подходит и это плохая практика:
// It is bad practice to mix default and named exports in the same module, though it is allowed by the specification.
export const TiptapVuetifyPlugin = new (class Plugin implements PluginInterface<OptionsInterface> {
  vuetify
  installed = false

  get vuetifyLang () {
    return this.vuetify.framework.lang.current
  }

  install (VueFuncConstructor, options?: OptionsInterface) {
    if (!options || !options.vuetify) {
      ConsoleLogger.error('Please, specify in options the Vuetify Object ("vuetify" property)')

      return
    }

    const {
      vuetify: vuetifyFramework,
      iconsGroup = theme.defaultIconsGroup
    } = options

    VueFuncConstructor.prototype.tiptapVuetifyPlugin = TiptapVuetifyPlugin
    VueFuncConstructor.prototype.$tiptapVuetify = {
      iconsGroup
    }
    this.vuetify = vuetifyFramework
    this.installed = true
  }
})()

// авто установка (полезно если ставится через CDN)
;(function autoInstall () {
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
