import { ListItem as ListItemOriginal } from 'tiptap-extensions'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'

export default class ListItem extends AbstractExtension {
  constructor (options) {
    super(options, ListItemOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return []
  }
}
