// import { TodoItem as TodoItemOriginal } from 'tiptap-extensions'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import TodoItemNode from '~/extensions/nativeExtensions/TodoList/TodoItemNode'

export default class TodoItem extends AbstractExtension {
  constructor (options) {
    super(options, TodoItemNode)
  }

  get availableActions (): ExtensionActionInterface[] {
    return []
  }
}
