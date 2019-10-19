import { Strike as StrikeOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class Strike extends AbstractExtension {
  constructor (options) {
    super(options, StrikeOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.Strike.buttons.strike.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('format_strikethrough'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-strikethrough'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-strikethrough'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z')
          },
          nativeExtensionName: 'strike'
        })
      }
    ]
  }
}
