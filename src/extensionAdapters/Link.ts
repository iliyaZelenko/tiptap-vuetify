import { Link as LinkOriginal } from 'tiptap-extensions'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { faIconsSize, VuetifyIconsGropus } from '~/configs/theme'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'

export const icons = {
  save: {
    [VuetifyIconsGropus.md]: new VuetifyIcon('check'),
    [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-check ' + faIconsSize),
    [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-check')
  },
  cancel: {
    [VuetifyIconsGropus.md]: new VuetifyIcon('link_off'),
    [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-unlink ' + faIconsSize),
    [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-link-off')
  },
  linkUpdate: {
    [VuetifyIconsGropus.md]: new VuetifyIcon('link'),
    [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fas fa-link ' + faIconsSize),
    [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-link')
  },
  linkAdd: {
    [VuetifyIconsGropus.md]: new VuetifyIcon('link'),
    [VuetifyIconsGropus.fa]: new VuetifyIcon('fas fa-link ' + faIconsSize),
    [VuetifyIconsGropus.mdi]: new VuetifyIcon('mdi-link-plus')
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
