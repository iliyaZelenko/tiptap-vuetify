import { Image as ImageOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import Vue from 'vue'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'
import ImageWindow from '~/extensions/nativeExtensions/image/ImageWindow.vue'

export default class Image extends AbstractExtension {
  constructor (options) {
    super(options, ImageOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    const nativeExtensionName = 'image'
    const options = this.options

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
            const LinkWindowComponent = Vue.extend(ImageWindow)
            const instance = new LinkWindowComponent({
              vuetify: Vue.prototype.tiptapVuetifyPlugin.vuetify,
              propsData: {
                value: true,
                nativeExtensionName,
                context,
                editor,
                imageSources: options.imageSources,
                imageSourcesOverride: options.imageSourcesOverride
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
