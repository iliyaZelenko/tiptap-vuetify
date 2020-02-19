import AbstractExtensionInterface from '~/extensions/AbstractExtensionInterface'

export default abstract class AbstractExtension implements AbstractExtensionInterface {
  nativeExtensionInstance = null

  /**
   * Доступные для отображения кнопки (например в зависимости от настроек)
   */
  abstract get availableActions ()

  protected constructor (protected options, protected extensionClass) {
    if (extensionClass) {
      // eslint-disable-next-line
      this.nativeExtensionInstance = new extensionClass(options)
    }
  }
}
