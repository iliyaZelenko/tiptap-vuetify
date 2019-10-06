import { Blockquote as BlockquoteOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensions/nativeExtensions/old/AbstractExtensionAdapter'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'

export default class Blockquote extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, BlockquoteOriginal)
  }

  get availableButtons () {
    return [
      {
        name: 'blockquote',
        tooltip: new I18nText('extensions.Blockquote.buttons.blockquote.tooltip'),
        icons: {
          [VuetifyIconsGroups.md]: new VuetifyIcon('format_quote'),
          [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-quote-right'),
          [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-quote-close')
        }
      }
    ]
  }
}
