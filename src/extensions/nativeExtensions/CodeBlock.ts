import { CodeBlock as CodeBlockOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

// TODO текст перед / после иконки. Сделать через массив: [new VuetifyIcon('code'), new TextForIcon('text')]
export default class CodeBlock extends AbstractExtension {
  constructor (options) {
    super(options, CodeBlockOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.CodeBlock.buttons.codeBlock.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('code'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-code'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-code-tags'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z')
          },
          nativeExtensionName: 'code_block'
        })
      }
    ]
  }
}
