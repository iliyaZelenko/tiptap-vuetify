import { Link as LinkOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'

export const icons = {
  save: {
    [VuetifyIconsGropus.md]: new VuetifyIcon('check'),
    [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-strikethrough fa-lg'),
    [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-strikethrough')
  },
  cancel: {
    [VuetifyIconsGropus.md]: new VuetifyIcon('cancel'),
    [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-strikethrough fa-lg'),
    [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-strikethrough')
  },
  link: {
    [VuetifyIconsGropus.md]: new VuetifyIcon('link'),
    [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-strikethrough fa-lg'),
    [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-format-strikethrough')
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
