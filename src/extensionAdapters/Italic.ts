import { Italic as ItalicOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'

export default class Italic extends AbstractExtensionAdapter {
  name: string = 'italic'

  constructor (options) {
    super(options, ItalicOriginal)
  }

  get availableButtons () {
    return [
      {
        name: this.name,
        tooltip: new I18nText('extensions.Italic.buttons.italic.tooltip'),
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_italic'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-italic ' + faIconsSize),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-italic')
        }
      }
    ]
  }
}
