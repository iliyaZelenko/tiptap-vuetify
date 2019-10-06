import { Extension } from 'tiptap'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'

export default abstract class AbstractExtension {
  nativeExtensionInstance: Extension | null = null

  /**
   * Доступные для отображения кнопки (например в зависимости от настроек)
   */
  abstract get availableActions (): ExtensionActionInterface[]

  protected constructor (protected options, protected extensionClass) {
    if (extensionClass) {
      // eslint-disable-next-line
      this.nativeExtensionInstance = new extensionClass(options)
    }
  }
}
