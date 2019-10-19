import { Bold as BoldOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class Bold extends AbstractExtension {
  constructor (options) {
    super(options, BoldOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.Bold.buttons.bold.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('format_bold'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-bold'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-bold'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z')
          },
          nativeExtensionName: 'bold'
        })
      }
    ]
  }
}
