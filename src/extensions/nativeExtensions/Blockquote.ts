import { Blockquote as BlockquoteOriginal } from 'tiptap-extensions'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
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
            [VuetifyIconsGropus.md]: new VuetifyIcon('format_quote'),
            [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-quote-right ' + faIconsSize),
            [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-quote-close')
          },
          nativeExtensionName: 'blockquote'
        })
      }
    ]
  }
}
