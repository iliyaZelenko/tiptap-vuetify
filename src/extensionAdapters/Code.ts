import { Code as CodeOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'

// TODO текст перед / после иконки. Сделать через массив: [new VuetifyIcon('code'), new TextForIcon('text')]
export default class Code extends AbstractExtensionAdapter {
  name: string = 'code'

  constructor (options) {
    super(options, CodeOriginal)
  }

  get availableButtons () {
    return [
      {
        name: this.name,
        tooltip: new I18nText('extensions.Code.buttons.code.tooltip'),
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('code'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-code ' + faIconsSize),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-code-tags')
        }
      }
    ]
  }
}
