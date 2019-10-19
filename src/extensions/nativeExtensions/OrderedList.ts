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
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-list-numbered'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z')
          },
          nativeExtensionName: 'ordered_list'
        })
      }
    ]
  }
}
