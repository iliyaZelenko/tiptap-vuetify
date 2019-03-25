import { HardBreak as HardBreakOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'

export default class HardBreak extends AbstractExtensionAdapter {
  name = null

  constructor (options) {
    super(options, HardBreakOriginal)
  }

  get availableButtons () {
    return []
  }
}
