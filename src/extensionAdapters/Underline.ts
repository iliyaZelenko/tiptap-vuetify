import { Underline as UnderlineOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'

export default class Underline extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, UnderlineOriginal)
  }

  get availableButtons () {
    return [
      {
        name: 'underline',
        tooltip: new I18nText('extensions.Underline.buttons.underline.tooltip'),
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_underline'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-underline fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-underline')
        }
      }
    ]
  }
}
