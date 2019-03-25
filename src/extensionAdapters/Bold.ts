import { Bold as BoldOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'

export default class Bold extends AbstractExtensionAdapter {
  name: string = 'bold'

  constructor (options) {
    super(options, BoldOriginal)
  }

  get availableButtons () {
    return [
      {
        name: this.name,
        tooltip: 'Bold',
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_bold'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-bold fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-bold')
        }
      }
    ]
  }
}
