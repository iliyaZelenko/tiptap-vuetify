import { TableHeader as TableHeaderOriginal } from 'tiptap-extensions'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import AbstractExtension from '~/extensions/AbstractExtension'

export default class TableHeader extends AbstractExtension {
  constructor (options) {
    super(options, TableHeaderOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return []
  }
}
