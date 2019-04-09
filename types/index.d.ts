import Vue from 'vue'
import { VuePrototypePluginInterface } from '~/main'
import { VuetifyObject } from 'vuetify'

// тут нужно все экспортировать (export), а не использовтаь namepsace

declare module 'vue/types/vue' {
  interface Vue {
    $tiptapVuetify: VuePrototypePluginInterface
  }
}

export default interface VueWithVuetify {
  $vuetify: VuetifyObject
}
