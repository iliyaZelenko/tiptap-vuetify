import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'

export default class Paragraph extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, null)
  }

  get availableButtons () {
    return [
      {
        name: 'paragraph',
        tooltip: new I18nText('extensions.Paragraph.buttons.paragraph.tooltip'),
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_textdirection_l_to_r'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-paragraph ' + faIconsSize),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-paragraph')
        }
      }
    ]
  }
}
