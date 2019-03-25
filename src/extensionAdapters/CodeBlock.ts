import { CodeBlock as CodeBlockOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'

// TODO текст перед / после иконки. Сделать через массив: [new VuetifyIcon('code'), new TextForIcon('text')]
export default class CodeBlock extends AbstractExtensionAdapter {
  name: string = 'code_block'

  constructor (options) {
    super(options, CodeBlockOriginal)
  }

  get availableButtons () {
    return [
      {
        name: this.name,
        tooltip: 'Code block',
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('code'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-code fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-code-tags')
        }
      }
    ]
  }
}
