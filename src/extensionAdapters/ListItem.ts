import { ListItem as ListItemOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'

export default class ListItem extends AbstractExtensionAdapter {
  // TODO null
  name: string = 'list_item'

  constructor (options) {
    super(options, ListItemOriginal)
  }

  get availableButtons () {
    return []
  }
}
