import Vue from 'vue'
import en from './en'
import ru from './ru'

export const dictionary = {
  en,
  ru
}
export function getCurrentLang () {
  return Vue.prototype.$vuetify.lang.current
}
export function getMsg (path: string, args?): string {
  const dictionaryByLang = dictionary[getCurrentLang()]
  const target = path.split('.').reduce((prev: string, curr: string) => {
    return prev[curr]
  }, dictionaryByLang)

  if (target instanceof Function) {
    return target(args)
  }

  return target
}
