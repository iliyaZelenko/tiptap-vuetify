import { Link as LinkOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '~/configs/theme'
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
            [VuetifyIconsGroups.md]: new VuetifyIcon('link'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fas fa-link'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z')
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
