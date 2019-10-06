import { OrderedList as OrderedListOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class OrderedList extends AbstractExtension {
  constructor (options) {
    super(options, OrderedListOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.OrderedList.buttons.orderedList.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('format_list_numbered'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-list-ol'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-list-numbered')
          },
          nativeExtensionName: 'ordered_list'
        })
      }
    ]
  }
}
