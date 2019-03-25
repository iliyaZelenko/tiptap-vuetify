import { Italic as ItalicOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'

export default class Italic extends AbstractExtensionAdapter {
  name: string = 'italic'

  constructor (options) {
    super(options, ItalicOriginal)
  }

  get availableButtons () {
    return [
      {
        name: this.name,
        tooltip: 'Italic',
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_italic'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-italic fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-italic')
        }
      }
    ]
  }
}
