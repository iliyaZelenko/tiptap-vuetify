import { Underline as UnderlineOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class Underline extends AbstractExtension {
  constructor (options) {
    super(options, UnderlineOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.Underline.buttons.underline.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('format_underline'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-underline'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-underline'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z')
          },
          nativeExtensionName: 'underline'
        })
      }
    ]
  }
}
