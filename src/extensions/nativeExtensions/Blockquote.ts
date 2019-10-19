import { Blockquote as BlockquoteOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class Blockquote extends AbstractExtension {
  constructor (options) {
    super(options, BlockquoteOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.Blockquote.buttons.blockquote.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('format_quote'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-quote-right'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-quote-close'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z')
          },
          nativeExtensionName: 'blockquote'
        })
      }
    ]
  }
}
