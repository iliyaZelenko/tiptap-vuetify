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
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-paragraph'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z')

          },
          nativeExtensionName: 'paragraph'
        })
      }
    ]
  }
}
