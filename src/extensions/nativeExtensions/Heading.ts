import { Heading as HeadingOriginal } from 'tiptap-extensions'
import TextIcon from '~/extensions/nativeExtensions/icons/TextIcon'
import { VuetifyIconsGroups } from '~/configs/theme'
import I18nText from '~/i18n/I18nText'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'
import AbstractExtension from '~/extensions/AbstractExtension'

export default class Heading extends AbstractExtension {
  constructor (options) {
    super(options, HeadingOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return this.options.levels.map(level => ({
      render: new ExtensionActionRenderBtn({
        tooltip: new I18nText('extensions.Heading.buttons.heading.tooltip', { level }),
        icons: {
          [VuetifyIconsGroups.md]: new TextIcon('H' + level),
          [VuetifyIconsGroups.fa]: new TextIcon('H' + level),
          [VuetifyIconsGroups.mdi]: new TextIcon('H' + level),
          [VuetifyIconsGroups.mdiSvg]: new TextIcon('H' + level)
        },
        nativeExtensionName: 'heading',
        onClickOptions: { level },
        isActiveOptions: { level }
      })
    }))
  }

  // get availableButtons () {
  //   return this.options.levels.map(level => ({
  //     name: 'heading',
  //     tooltip: new I18nText('extensions.Heading.buttons.heading.tooltip', { level }),
  //     icons: {
  //       [VuetifyIconsGroups.md]: new TextIcon('H' + level),
  //       [VuetifyIconsGroups.fa]: new TextIcon('H' + level),
  //       [VuetifyIconsGroups.mdi]: new TextIcon('H' + level)
  //     },
  //     clickOptions: { level },
  //     isActiveOptions: { level }
  //   }))
  // }
}
