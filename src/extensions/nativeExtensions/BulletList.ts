import { BulletList as BulletListOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class BulletList extends AbstractExtension {
  constructor (options) {
    super(options, BulletListOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.BulletList.buttons.bulletList.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('format_list_bulleted'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-list-ul'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-list-bulleted')
          },
          nativeExtensionName: 'bullet_list'
        })
      }
    ]
  }
}
