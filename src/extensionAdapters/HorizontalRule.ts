import { HorizontalRule as HorizontalRuleOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'
import TextIcon from '~/extensionAdapters/icons/TextIcon'

export default class HorizontalRule extends AbstractExtensionAdapter {
  name: string = 'horizontal_rule'

  constructor (options) {
    super(options, HorizontalRuleOriginal)
  }

  get availableButtons () {
    return [
      {
        name: this.name,
        tooltip: 'Horizontal line',
        icons: {
          [VuetifyIconsGropus.md]: new TextIcon('—'),
          [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-minus fa-lg'),
          [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-minus')
        }
      }
    ]
  }
}
