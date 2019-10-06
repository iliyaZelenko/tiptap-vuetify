import { HardBreak as HardBreakOriginal } from 'tiptap-extensions'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'

export default class HardBreak extends AbstractExtension {
  constructor (options) {
    super(options, HardBreakOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return []
  }
}
