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
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-underline')
          },
          nativeExtensionName: 'underline'
        })
      }
    ]
  }
}
