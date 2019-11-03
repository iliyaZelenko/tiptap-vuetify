import { Image as ImageOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import Vue from 'vue'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class Image extends AbstractExtension {
  constructor (options) {
    super(options, ImageOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    const nativeExtensionName = 'image'

    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: new I18nText('extensions.Image.buttons.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('image'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-image'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-image'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z')
          },
          nativeExtensionName,
          async onClick ({ context, editor }) {
            const ImageWindow = (await import('~/extensions/nativeExtensions/image/ImageWindow.vue')).default
            const LinkWindowComponent = Vue.extend(ImageWindow)
            const instance = new LinkWindowComponent({
              vuetify: Vue.prototype.tiptapVuetifyPlugin.vuetify,
              propsData: {
                value: true,
                nativeExtensionName,
                context,
                editor
              }
            })

            instance.$mount()
            document.querySelector('body')!.appendChild(instance.$el)
          }
        })
      }
    ]
  }
}

// export const icons = {
//   save: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('check'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-check'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-check')
//   },
//   cancel: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('link_off'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-unlink'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link-off')
//   },
//   linkUpdate: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('link'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fas fa-link'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link')
//   },
//   linkAdd: {
//     [VuetifyIconsGroups.md]: new VuetifyIcon('link'),
//     [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-link'),
//     [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link-plus')
//   }
// }
