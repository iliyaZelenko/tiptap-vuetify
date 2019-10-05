// !!! В этом файле не использовать алиасы в путях (e.g. "~")
import Vue, { PluginObject } from 'vue'
import { Framework } from 'vuetify'
import { VuetifyIconsGropus } from '../src/configs/theme'

// тут нужно все экспортировать (export), а не использовтаь namepsace

export interface PluginInterface<T> extends PluginObject<T> {
  vuetify: Framework
  installed: boolean
  vuetifyLang: Framework['lang']['current'] | null

  install (VueFuncConstructor, options: T)
}

export interface OptionsInterface {
  vuetify: Framework
  iconsGroup?: VuetifyIconsGropus
}

export interface VuePrototypePluginInterface {
  iconsGroup: VuetifyIconsGropus
}

declare module 'vue/types/vue' {
  interface Vue {
    $tiptapVuetify: VuePrototypePluginInterface
    tiptapVuetifyPlugin: PluginInterface<OptionsInterface>
  }
}
