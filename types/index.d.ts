import Vue from 'vue'
import { VuePrototypePluginInterface } from '~/main'

// тут нужно все экспортировать (export), а не использовтаь namepsace

declare module 'vue/types/vue' {
  interface Vue {
    $tiptapVuetify: VuePrototypePluginInterface
  }
}
