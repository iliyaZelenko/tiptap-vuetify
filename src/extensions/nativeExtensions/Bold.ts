import { Bold as BoldOriginal } from 'tiptap-extensions'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class Bold extends AbstractExtension {
  constructor (options) {
    super(options, BoldOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.Bold.buttons.bold.tooltip'),
          icons: {
            [VuetifyIconsGropus.md]: new VuetifyIcon('format_bold'),
            [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-bold ' + faIconsSize),
            [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-bold')
          },
          nativeExtensionName: 'bold'
        })
      }
    ]
  }
}
