import I18nText from '~/i18n/I18nText'
import { VuetifyIconsGropus } from '~/configs/theme'
import IconInterface from '~/extensions/nativeExtensions/icons/IconInterface'

export default interface ExtensionActionRenderBtnOptionsInterface {
  tooltip: I18nText | ((context, options) => I18nText)
  icons: {
    [VuetifyIconsGropus.md]: IconInterface
    [VuetifyIconsGropus.fa]: IconInterface
    [VuetifyIconsGropus.mdi]: IconInterface
  }
  onClick: (...arg: any) => any
  isActive: (...arg: any) => boolean
  nativeExtensionName?: string
}
