import { Italic as ItalicOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'
import AbstractExtension from '~/extensions/AbstractExtension'

export default class Italic extends AbstractExtension {
  constructor (options) {
    super(options, ItalicOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.Italic.buttons.italic.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('format_italic'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-italic'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-italic')
          },
          nativeExtensionName: 'italic'
        })
      }
    ]
  }
}
