import { Heading as HeadingOriginal } from 'tiptap-extensions'
import TextIcon from '~/extensionAdapters/icons/TextIcon'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'

export default class Heading extends AbstractExtensionAdapter {
  name: string = 'heading'

  constructor (options) {
    super(options, HeadingOriginal)
  }

  get availableButtons () {
    return this.options.levels.map(level => ({
      name: this.name,
      tooltip: level + ' level header',
      icons: {
        [VuetifyIconsGropus.md]: new TextIcon('H' + level),
        [VuetifyIconsGropus.fa]: new TextIcon('H' + level),
        [VuetifyIconsGropus.mdi]: new TextIcon('H' + level)
      },
      clickOptions: { level },
      isActiveOptions: { level }
    }))
  }
}
