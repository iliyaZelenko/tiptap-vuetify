import { OrderedList as OrderedListOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'

export default class OrderedList extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, OrderedListOriginal)
  }

  get availableButtons () {
    return [
      {
        name: 'ordered_list',
        tooltip: new I18nText('extensions.OrderedList.buttons.orderedList.tooltip'),
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_list_numbered'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-list-ol ' + faIconsSize),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-list-numbered')
        }
      }
    ]
  }
}
