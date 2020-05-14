import ExtensionActionRenderInterface from '~/extensions/actions/renders/ExtensionActionRenderInterface'
// import { ExtensionActionRenderInEnum } from '~/extensions/actions/ExtensionActionRenderInEnum'

export default interface ExtensionActionInterface {
  render: ExtensionActionRenderInterface
  component?: any
  componentOptions?: object
  // renderIn: ExtensionActionRenderInEnum
}
