import { Editor, Extension } from 'tiptap'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'

export default interface AbstractExtensionInterface {
  availableActions: ExtensionActionInterface[]

  nativeExtensionInstance: Extension | null

  onEditorInit? (editor: Editor)
}
