import en from './en'
import ru from './ru'
import es from './es'
import pl from './pl'
import fr from './fr'
import uk from './uk'
import ptbr from './ptbr'
import tr from './tr'
import he from './he'
import nl from './nl'
import ja from './ja'
import de from './de'
import ko from './ko'
import zh from './zh'
import ConsoleLogger from '~/logging/ConsoleLogger'
import { TiptapVuetifyPlugin } from '~/main'

export const defaultLanguage = 'en'
export const dictionary = {
  en,
  ru,
  es,
  pl,
  fr,
  uk,
  ptbr,
  tr,
  he,
  nl,
  ja,
  de,
  ko,
  zh
}

export function getCurrentLang () {
  return TiptapVuetifyPlugin.vuetifyLang || defaultLanguage
}

export function getMsg (path: string, args?, lang: null | string = null): string {
  let currentLang = lang || getCurrentLang()

  if (!dictionary[currentLang]) {
    currentLang = defaultLanguage

    ConsoleLogger.warn(`The current language "${currentLang}" is not yet available. Using language "${defaultLanguage}" by default. Contribution to github is welcome.`)
  }

  const dictionaryByLang = dictionary[currentLang]
  let target

  try {
    target = path.split('.').reduce((prev: string, curr: string) => {
      return prev[curr]
    }, dictionaryByLang)
  } catch (e) {
    ConsoleLogger.warn(`Cannot get translation "${path}" for language "${currentLang}". Fallback "${defaultLanguage}" is used instead. Contribution to github is welcome.`)

    // Использовать defaultLanguage если фраза не переведена на текущий язык
    return getMsg(path, args, defaultLanguage)
  }

  if (target instanceof Function) {
    return target(args)
  }

  return target
}
