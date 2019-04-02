import { Bold as BoldOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'

export default class Bold extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, BoldOriginal)
  }

  get availableButtons () {
    return [
      {
        name: 'bold',
        tooltip: new I18nText('extensions.Bold.buttons.bold.tooltip'),
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_bold'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-bold ' + faIconsSize),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-bold')
        }
      }
    ]
  }
}
