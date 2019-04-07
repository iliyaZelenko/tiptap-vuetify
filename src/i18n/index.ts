import Vue from 'vue'
import en from './en'
import ru from './ru'

export const dictionary = {
  en,
  ru
}
export function getCurrentLang () {
  if (!Vue.prototype.$vuetify) {
    console.warn('tiptap-vuetify: Could not determine language, because Vue.prototype.$vuetify is not available. ' +
      'Using language \'en\' by default.')
    return 'en'
  }
  return Vue.prototype.$vuetify.lang.current
}
export function getMsg (path: string, args?): string {
  let currentLang = getCurrentLang()
  if (!dictionary.hasOwnProperty(currentLang)) {
    console.warn('tiptap-vuetify: The current language \'' + currentLang + '\' is not yet available. Using language \'en\' by default.')
    currentLang = 'en'
  }
  const dictionaryByLang = dictionary[currentLang]
  const target = path.split('.').reduce((prev: string, curr: string) => {
    return prev[curr]
  }, dictionaryByLang)

  if (target instanceof Function) {
    return target(args)
  }

  return target
}
