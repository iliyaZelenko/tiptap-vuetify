import Vue from 'vue'
import en from './en'
import ru from './ru'

export const dictionary = {
  en,
  ru
}
export function getCurrentLang () {
  if (!Vue.prototype.$vuetify) {
    console.warn('Could not determine language, because Vue.prototype.$vuetify is not available. ' +
      'Please make sure to execute Vue.use(Vuetify, ...) before loading tiptap-vuetify. Using language \'en\' by default.')
    return 'en'
  }
  return Vue.prototype.$vuetify.lang.current
}
export function getMsg (path: string, args?): string {
  const validLang = dictionary.hasOwnProperty(getCurrentLang()) ? getCurrentLang() : 'en'
  const dictionaryByLang = dictionary[validLang]
  const target = path.split('.').reduce((prev: string, curr: string) => {
    return prev[curr]
  }, dictionaryByLang)

  if (target instanceof Function) {
    return target(args)
  }

  return target
}
