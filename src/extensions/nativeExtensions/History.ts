import { History as HistoryOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class History extends AbstractExtension {
  constructor (options) {
    super(options, HistoryOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    // если не нужны кнокпи
    if (this.options && this.options.noActions) return []

    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.History.buttons.undo.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('undo'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-undo'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-undo')
          },
          nativeExtensionName: 'undo'
        })
      },
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.History.buttons.redo.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('redo'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-redo'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-redo')
          },
          nativeExtensionName: 'redo'
        })
      }
    ]
  }
}
