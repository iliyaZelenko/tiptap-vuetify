import { Extension } from 'tiptap'

export default abstract class AbstractExtensionAdapter {
  extensionInstance: Extension | null = null

  /**
   * Доступные для отображения кнопки (например в зависимости от настроек)
   */
  abstract get availableButtons ()

  get isActiveOptions (): any {
    return undefined
  }

  get clickOptions (): any {
    return undefined
  }

  protected constructor (protected options, protected extensionClass: Extension | null) {
    if (extensionClass) {
      this.extensionInstance = new extensionClass(options)
    }
  }
}
