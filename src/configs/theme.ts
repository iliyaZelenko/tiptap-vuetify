import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'

export const enum VuetifyIconsGroups {
  // default icons in vuetify (official material design icons)
  md = 'md',
  mdi = 'mdi',
  fa = 'fa',
  /*
    Для получения mdiSvg иконки, можно в RunKit запустить код:
    const js = require("@mdi/js")
    console.log(js.mdiClose)
   */
  mdiSvg = 'mdiSvg'
}

export default {
  defaultIconsGroup: VuetifyIconsGroups.md
}

export const COMMON_ICONS = {
  close: {
    [VuetifyIconsGroups.md]: new VuetifyIcon('close'),
    [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-times'),
    [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-close'),
    [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z')
  }
}
