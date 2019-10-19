import I18nText from '~/i18n/I18nText'
import { VuetifyIconsGroups } from '~/configs/theme'
import IconInterface from '~/extensions/nativeExtensions/icons/IconInterface'

export default interface ExtensionActionRenderBtnOptionsInterface {
  tooltip: I18nText | ((context, options) => I18nText)
  icons: {
    [key in keyof typeof VuetifyIconsGroups]: IconInterface
  }
  onClick: ({ context, editor }) => any
  onClickOptions?: { [key: string]: any }
  isActive: (...arg: any) => boolean
  isActiveOptions?: { [key: string]: any }
  nativeExtensionName?: string
}
