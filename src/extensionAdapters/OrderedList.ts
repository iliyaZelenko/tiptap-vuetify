import { OrderedList as OrderedListOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'

export default class OrderedList extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, OrderedListOriginal)
  }

  get availableButtons () {
    return [
      {
        name: 'ordered_list',
        tooltip: 'Ordered list',
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_list_numbered'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-list-ol fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-list-numbered')
        }
      }
    ]
  }
}
