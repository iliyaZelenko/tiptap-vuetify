import { Blockquote as BlockquoteOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'

export default class Blockquote extends AbstractExtensionAdapter {
  name: string = 'blockquote'

  constructor (options) {
    super(options, BlockquoteOriginal)
  }

  get availableButtons () {
    return [
      {
        name: this.name,
        tooltip: 'Block quote',
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_quote'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-quote-right fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-quote-close')
        }
      }
    ]
  }
}
