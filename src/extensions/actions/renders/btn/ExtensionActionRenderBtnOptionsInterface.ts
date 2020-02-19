import I18nText from '~/i18n/I18nText'
import { VuetifyIconsGroups } from '~/configs/theme'
import IconInterface from '~/extensions/nativeExtensions/icons/IconInterface'
import { Editor } from 'tiptap'

export default interface ExtensionActionRenderBtnOptionsInterface {
  tooltip: string | I18nText | ((context, options) => string | I18nText)
  icons: Partial<{
    [key in keyof typeof VuetifyIconsGroups]: IconInterface
  }>
  onClick: ({ context, editor }: {
    context: any
    editor: Editor
  }) => any
  onClickOptions?: { [key: string]: any }
  isActive: (...arg: any) => boolean
  isActiveOptions?: { [key: string]: any }
  nativeExtensionName?: string
}
