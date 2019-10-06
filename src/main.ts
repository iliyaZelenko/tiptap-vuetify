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
