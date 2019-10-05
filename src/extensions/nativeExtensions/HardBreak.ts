import { HardBreak as HardBreakOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensions/nativeExtensions/AbstractExtensionAdapter'

export default class HardBreak extends AbstractExtensionAdapter {
  name = null

  constructor (options) {
    super(options, HardBreakOriginal)
  }

  get availableButtons () {
    return []
  }
}
