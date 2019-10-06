import { Link as LinkOriginal } from 'tiptap-extensions'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import I18nText from '~/i18n/I18nText'
import AbstractExtension from '~/extensions/AbstractExtension'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import LinkWindow from '~/extensions/nativeExtensions/link/LinkWindow.vue'
import Vue from 'vue'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export default class Link extends AbstractExtension {
  constructor (options) {
    super(options, LinkOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    const nativeExtensionName = 'link'

    return [
      {
        render: new ExtensionActionRenderBtn({
          tooltip: (context, options) => new I18nText(
            options.isActive(context)
              ? 'extensions.Link.buttons.isActive.tooltip'
              : 'extensions.Link.buttons.notActive.tooltip'),
          icons: {
            [VuetifyIconsGropus.md]: new VuetifyIcon('link'),
            [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fas fa-link ' + faIconsSize),
            [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-link')
          },
          nativeExtensionName,
          onClick ({ context, editor }) {
            const href = context.getMarkAttrs(nativeExtensionName).href
            const LinkWindowComponent = Vue.extend(LinkWindow)
            const instance = new LinkWindowComponent({
              vuetify: Vue.prototype.tiptapVuetifyPlugin.vuetify,
              propsData: {
                value: true,
                nativeExtensionName,
                context,
                editor,
                href
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
//     [VuetifyIconsGropus.md]: new VuetifyIcon('check'),
//     [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-check ' + faIconsSize),
//     [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-check')
//   },
//   cancel: {
//     [VuetifyIconsGropus.md]: new VuetifyIcon('link_off'),
//     [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-unlink ' + faIconsSize),
//     [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-link-off')
//   },
//   linkUpdate: {
//     [VuetifyIconsGropus.md]: new VuetifyIcon('link'),
//     [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fas fa-link ' + faIconsSize),
//     [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-link')
//   },
//   linkAdd: {
//     [VuetifyIconsGropus.md]: new VuetifyIcon('link'),
//     [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-link ' + faIconsSize),
//     [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-link-plus')
//   }
// }
