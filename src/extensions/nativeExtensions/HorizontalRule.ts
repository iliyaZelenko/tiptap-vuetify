import { HorizontalRule as HorizontalRuleOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import TextIcon from '~/extensions/nativeExtensions/icons/TextIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class HorizontalRule extends AbstractExtension {
  constructor (options) {
    super(options, HorizontalRuleOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.HorizontalRule.buttons.horizontalRule.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new TextIcon('—'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-minus'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-minus'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M19,13H5V11H19V13Z')
          },
          nativeExtensionName: 'horizontal_rule'
        })
      }
    ]
  }
}
