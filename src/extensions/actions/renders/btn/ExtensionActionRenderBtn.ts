import ExtensionActionRenderBtnOptionsInterface
  from '~/extensions/actions/renders/btn/ExtensionActionRenderBtnOptionsInterface'

type OptionalOptionsType = 'onClick' | 'isActive'

export default class ExtensionActionRenderBtn {
  options: ExtensionActionRenderBtnOptionsInterface

  constructor (
    options: Omit<ExtensionActionRenderBtnOptionsInterface, OptionalOptionsType> & Partial<
    Pick<ExtensionActionRenderBtnOptionsInterface, OptionalOptionsType>
    >
  ) {
    const nativeExtensionName = options.nativeExtensionName!

    this.options = {
      onClick ({ context }) {
        context.commands[nativeExtensionName](options.onClickOptions)
      },
      isActive ({ isActive }) {
        return !!isActive[nativeExtensionName] && isActive[nativeExtensionName](options.isActiveOptions)
      },
      ...options
    }
  }
}
