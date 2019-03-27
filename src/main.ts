import MainComponent from '~/components/Main.vue'
import theme, { VuetifyIconsGropus } from '~/configs/theme'

export const TiptapVuetify = MainComponent

// дефолтный экспорт не подходит и это плохая практика:
// It is bad practice to mix default and named exports in the same module, though it is allowed by the specification.
export const TiptapVuetifyPlugin = new (class Plugin {
  iconsGroup: VuetifyIconsGropus

  install (Vue, options: OptionsInterface = {}) {
    const {
      iconsGroup = theme.defaultIconsGroup
    } = options

    this.iconsGroup = iconsGroup
  }
})()

export { default as Heading } from '~/extensionAdapters/Heading'
export { default as Bold } from '~/extensionAdapters/Bold'
export { default as Italic } from '~/extensionAdapters/Italic'
export { default as Strike } from '~/extensionAdapters/Strike'
export { default as Underline } from '~/extensionAdapters/Underline'
export { default as Code } from '~/extensionAdapters/Code'
export { default as CodeBlock } from '~/extensionAdapters/CodeBlock'
export { default as Paragraph } from '~/extensionAdapters/Paragraph'
export { default as BulletList } from '~/extensionAdapters/BulletList'
export { default as OrderedList } from '~/extensionAdapters/OrderedList'
export { default as ListItem } from '~/extensionAdapters/ListItem'
export { default as Blockquote } from '~/extensionAdapters/Blockquote'
export { default as HardBreak } from '~/extensionAdapters/HardBreak'
export { default as HorizontalRule } from '~/extensionAdapters/HorizontalRule'
export { default as History } from '~/extensionAdapters/History'

interface OptionsInterface {
  iconsGroup?: VuetifyIconsGropus
}
