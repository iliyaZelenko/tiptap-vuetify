import TiptapVuetify from '~/components/TiptapVuetify.vue'
import theme from '~/configs/theme'
import VueWithVuetify, { OptionsInterface, PluginInterface } from '../types'
import { VuetifyVuePrototypeProperty } from '~/const'
import { VuetifyObject } from 'vuetify'
import ConsoleLogger from '~/logging/ConsoleLogger'
import { defaultLanguage } from '~/i18n/index'

export * from '~/extensionAdapters/index'
export { TiptapVuetify }

// дефолтный экспорт не подходит и это плохая практика:
// It is bad practice to mix default and named exports in the same module, though it is allowed by the specification.
export const TiptapVuetifyPlugin = new (class Plugin implements PluginInterface {
  installed: boolean = false
  currentVueFuncConstructor!: VueWithVuetify
  currentVuePrototype!: VueWithVuetify

  get vuetify (): VuetifyObject {
    return this.currentVuePrototype[VuetifyVuePrototypeProperty]
  }

  get vuetifyLang () {
    const vuetify = this.vuetify
    // TODO optional chaining
    return (vuetify && vuetify.lang && vuetify.lang.current) || null
  }

  install (VueFuncConstructor, options: OptionsInterface = {}) {
    const {
      // TODO default language (походу в ts так нельзя)
      iconsGroup = theme.defaultIconsGroup
    } = options

    VueFuncConstructor.prototype.$tiptapVuetify = {
      iconsGroup
    }
    VueFuncConstructor.prototype.tiptapVuetifyPlugin = TiptapVuetifyPlugin

    this.currentVueFuncConstructor = VueFuncConstructor
    this.currentVuePrototype = VueFuncConstructor.prototype

    this.checkVuetifyLang()

    this.installed = true
  }

  checkVuetifyLang () {
    if (!this.vuetifyLang) {
      ConsoleLogger.warn(`Could not determine language, because Vue.prototype.${VuetifyVuePrototypeProperty}` +
        `is not available. Using language "${defaultLanguage}" by default.`)
    }
  }
})()
