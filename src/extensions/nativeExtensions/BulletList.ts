import { BulletList as BulletListOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensions/nativeExtensions/AbstractExtensionAdapter'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'

export default class BulletList extends AbstractExtensionAdapter {
  name: string = 'bullet_list'

  constructor (options) {
    super(options, BulletListOriginal)
  }

  get availableButtons () {
    return [
      {
        name: this.name,
        tooltip: new I18nText('extensions.BulletList.buttons.bulletList.tooltip'),
        icons: {
          [VuetifyIconsGropus.md]: new VuetifyIcon('format_list_bulleted'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-list-ul ' + faIconsSize),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-list-bulleted')
        }
      }
    ]
  }
}
