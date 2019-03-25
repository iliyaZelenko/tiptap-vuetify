import { BulletList as BulletListOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'

export default class BulletList extends AbstractExtensionAdapter {
  name: string = 'bullet_list'

  constructor (options) {
    super(options, BulletListOriginal)
  }

  get availableButtons () {
    return [
      {
        name: this.name,
        tooltip: 'Bulleted list',
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_list_bulleted'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-list-ul fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-list-bulleted')
        }
      }
    ]
  }
}
