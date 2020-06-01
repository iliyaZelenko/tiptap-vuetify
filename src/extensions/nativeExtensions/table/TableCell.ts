import { TableCell as TableCellOriginal } from 'tiptap-extensions'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import AbstractExtension from '~/extensions/AbstractExtension'

export default class TableCell extends AbstractExtension {
  constructor (options) {
    super(options, TableCellOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return []
  }
}
