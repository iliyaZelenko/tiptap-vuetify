import TiptapVuetify from '~/components/TiptapVuetify.vue'
import theme, { VuetifyIconsGropus } from '~/configs/theme'
import VueWithVuetify from '../types'
import { VuetifyVuePrototypeProperty } from '~/const'
import { VuetifyObject } from 'vuetify'
import ConsoleLogger from '~/logging/ConsoleLogger'
import { defaultLanguage } from '~/i18n'
// export {
//   Heading,
//   Bold,
//   Italic,
//   Strike,
//   Underline,
//   Code,
//   CodeBlock,
//   Paragraph,
//   BulletList,
//   OrderedList,
//   ListItem,
//   Blockquote,
//   HardBreak,
//   HorizontalRule,
//   History,
//   Link
// } from '~/extensionAdapters'

export * from '~/extensionAdapters'

export {
  TiptapVuetify
}

// дефолтный экспорт не подходит и это плохая практика:
// It is bad practice to mix default and named exports in the same module, though it is allowed by the specification.
export const TiptapVuetifyPlugin = new (class Plugin {
  installed: boolean = false
  currentVueFuncConstructor!: VueWithVuetify
  currentVuePrototype!: VueWithVuetify

  get vuetify (): VuetifyObject {
    return this.currentVuePrototype[VuetifyVuePrototypeProperty]
  }

  get vuetifyLang () {
    // TODO optional chaining
    return (this.vuetify && this.vuetify.lang && this.vuetify.lang.current) || null
  }

  install (VueFuncConstructor, options: OptionsInterface = {}) {
    const {
      // TODO default language
      iconsGroup = theme.defaultIconsGroup
    } = options
    const plugin: VuePrototypePluginInterface = {
      iconsGroup
    }
    VueFuncConstructor.prototype.$tiptapVuetify = plugin

    this.currentVueFuncConstructor = VueFuncConstructor
    this.currentVuePrototype = VueFuncConstructor.prototype

    this.checkVuetifyLang()

    this.installed = true
  }

  checkVuetifyLang () {
    if (!this.vuetifyLang) {
      ConsoleLogger.warn(`Could not determine language, because Vue.prototype.${VuetifyVuePrototypeProperty} is not available. Using language "${defaultLanguage}" by default.`)

      return defaultLanguage
    }
  }
})()

interface OptionsInterface {
  iconsGroup?: VuetifyIconsGropus
}

export interface VuePrototypePluginInterface {
  iconsGroup: VuetifyIconsGropus
}
