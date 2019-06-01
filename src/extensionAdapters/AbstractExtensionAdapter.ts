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

  // extensionClass: Extension | null
  protected constructor (protected options, protected extensionClass) {
    if (extensionClass) {
      // eslint-disable-next-line
      this.extensionInstance = new extensionClass(options)
    }
  }
}
