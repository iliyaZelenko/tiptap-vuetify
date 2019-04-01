import { Heading as HeadingOriginal } from 'tiptap-extensions'
import TextIcon from '~/extensionAdapters/icons/TextIcon'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import I18nText from '~/i18n/I18nText'

export default class Heading extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, HeadingOriginal)
  }

  get availableButtons () {
    return this.options.levels.map(level => ({
      name: 'heading',
      tooltip: new I18nText('extensions.Heading.buttons.heading.tooltip', { level }),
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
