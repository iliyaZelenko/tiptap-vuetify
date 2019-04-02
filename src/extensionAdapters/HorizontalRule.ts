import { HorizontalRule as HorizontalRuleOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'
import TextIcon from '~/extensionAdapters/icons/TextIcon'
import I18nText from '~/i18n/I18nText'

export default class HorizontalRule extends AbstractExtensionAdapter {
  name: string = 'horizontal_rule'

  constructor (options) {
    super(options, HorizontalRuleOriginal)
  }

  get availableButtons () {
    return [
      {
        name: this.name,
        tooltip: new I18nText('extensions.HorizontalRule.buttons.horizontalRule.tooltip'),
        icons: {
          [VuetifyIconsGropus.md]: new TextIcon('—'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-minus ' + faIconsSize),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-minus')
        }
      }
    ]
  }
}
