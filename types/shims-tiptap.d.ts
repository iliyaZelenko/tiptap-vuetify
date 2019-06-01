declare module 'tiptap' {
  import { Vue } from 'vue/types/vue'

  // const _a: any
  // export = _a
  // import * as Tiptap from 'tiptap'
  // export * from 'tiptap'
  // // export { Extension } from 'tiptap'
  // export type Extension = any
  // export type Editor = any
  // export type EditorMenuBubble = any
  export class Extension {
    constructor (...arg: any[])
    [key: string]: any
  }
  export class Editor {
    constructor (...arg: any[])
    [key: string]: any
  }
  export class EditorMenuBubble extends Vue {
    [key: string]: any
  }
  export class EditorContent extends Vue {
    [key: string]: any
  }
  export class EditorMenuBar extends Vue {
    [key: string]: any
  }

  // Heading,
  //   Bold,
  //   Italic,
  //   Strike,
  //   Underline,
  //   Code,
  //   CodeBlock,
  //   Paragraph,
  //   BulletList,
  //   OrderedList,
  //   ListItem,
  //   Blockquote,
  //   HardBreak,
  //   HorizontalRule,
  //   History,
  //   Link
}
