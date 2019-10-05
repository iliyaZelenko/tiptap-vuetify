import { ListItem as ListItemOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensions/nativeExtensions/AbstractExtensionAdapter'

export default class ListItem extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, ListItemOriginal)
  }

  get availableButtons () {
    return []
  }
}
