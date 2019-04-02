import { Strike as StrikeOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'

export default class Strike extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, StrikeOriginal)
  }

  get availableButtons () {
    return [
      {
        name: 'strike',
        tooltip: new I18nText('extensions.Strike.buttons.strike.tooltip'),
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_strikethrough'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-strikethrough ' + faIconsSize),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-strikethrough')
        }
      }
    ]
  }
}
