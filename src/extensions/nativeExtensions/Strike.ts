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
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-strikethrough')
          },
          nativeExtensionName: 'strike'
        })
      }
    ]
  }
}
