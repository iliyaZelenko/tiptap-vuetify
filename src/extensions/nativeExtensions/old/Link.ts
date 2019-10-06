import { Link as LinkOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensions/nativeExtensions/old/AbstractExtensionAdapter'
import { VuetifyIconsGroups } from '~/configs/theme'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'

export const icons = {
  save: {
    [VuetifyIconsGroups.md]: new VuetifyIcon('check'),
    [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-check'),
    [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-check')
  },
  cancel: {
    [VuetifyIconsGroups.md]: new VuetifyIcon('link_off'),
    [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-unlink'),
    [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link-off')
  },
  linkUpdate: {
    [VuetifyIconsGroups.md]: new VuetifyIcon('link'),
    [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fas fa-link'),
    [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link')
  },
  linkAdd: {
    [VuetifyIconsGroups.md]: new VuetifyIcon('link'),
    [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-link'),
    [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-link-plus')
  }
}

export default class Link extends AbstractExtensionAdapter {
  constructor (options) {
    super(options, LinkOriginal)
  }

  get availableButtons () {
    return [
      // TODO возможно сделать кнопку в тулбаре как и остальные, а может сделать как в примере vuetify
      // но там всеранво в комманду нужно передавать параметр href
      // {
      //   name: 'link',
      //   tooltip: 'Link',
      //   icons
      // }
    ]
  }
}
