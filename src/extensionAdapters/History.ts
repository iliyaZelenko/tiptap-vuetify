import { History as HistoryOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'

export default class History extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, HistoryOriginal)
  }

  get availableButtons () {
    return [
      {
        name: 'undo',
        tooltip: 'Undo',
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('undo'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-undo fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-undo')
        }
      },
      {
        name: 'redo',
        tooltip: 'Redo',
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('redo'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-redo fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-redo')
        }
      }
    ]
  }
}
