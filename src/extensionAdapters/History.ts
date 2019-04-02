import { History as HistoryOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'

export default class History extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, HistoryOriginal)
  }

  get availableButtons () {
    return [
      {
        name: 'undo',
        tooltip: new I18nText('extensions.History.buttons.undo.tooltip'),
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('undo'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-undo ' + faIconsSize),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-undo')
        }
      },
      {
        name: 'redo',
        tooltip: new I18nText('extensions.History.buttons.redo.tooltip'),
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('redo'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-redo ' + faIconsSize),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-redo')
        }
      }
    ]
  }
}
