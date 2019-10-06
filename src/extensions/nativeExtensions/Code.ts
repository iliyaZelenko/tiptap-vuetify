import { Code as CodeOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

// TODO текст перед / после иконки. Сделать через массив: [new VuetifyIcon('code'), new TextForIcon('text')]
export default class Code extends AbstractExtension {
  constructor (options) {
    super(options, CodeOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.Code.buttons.code.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('code'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-code'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-code-tags')
          },
          nativeExtensionName: 'code'
        })
      }
    ]
  }
}
