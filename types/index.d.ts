// !!! В этом файле не использовать алиасы в путях (e.g. "~")
import Vue from 'vue'
import { VuetifyObject } from 'vuetify'
import { VuetifyIconsGropus } from '../src/configs/theme'

// тут нужно все экспортировать (export), а не использовтаь namepsace

export interface PluginInterface {
  vuetify: VuetifyObject
  vuetifyLang: VuetifyObject['lang']['current'] | null

  install (VueFuncConstructor, options: OptionsInterface): void
  checkVuetifyLang (): void
}

export interface OptionsInterface {
  iconsGroup?: VuetifyIconsGropus
}

export interface VuePrototypePluginInterface {
  iconsGroup: VuetifyIconsGropus
}

export default interface VueWithVuetify {
  $vuetify: VuetifyObject
}

declare module 'vue/types/vue' {
  interface Vue {
    $tiptapVuetify: VuePrototypePluginInterface
    tiptapVuetifyPlugin: PluginInterface
  }
}
