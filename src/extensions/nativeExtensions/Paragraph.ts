import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class Paragraph extends AbstractExtension {
  constructor (options) {
    super(options, null)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.Paragraph.buttons.paragraph.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('format_textdirection_l_to_r'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-paragraph'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-paragraph')
          },
          nativeExtensionName: 'paragraph'
        })
      }
    ]
  }
}
