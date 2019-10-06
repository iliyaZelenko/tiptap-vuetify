<template>
  <div>
    <!-- :toolbar-attributes="{ color: 'yellow' }" -->
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
      placeholder="Write something …"
    />

    <br><br>
    <h1>Preview</h1>
    <hr>

    <div
      class="tiptap-vuetify-editor__content"
      v-html="content"
    />
  </div>
</template>

<script>
import { MAIN_MODULE } from '../config'

export default {
  components: {
    TiptapVuetify: () => MAIN_MODULE.then(({ TiptapVuetify }) => TiptapVuetify)
  },
  data: () => ({
    extensions: null,
    content: `
      <h1>Yay Headlines!</h1>
      <blockquote>Test quote.</blockquote>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `
  }),
  async created () {
    const { Heading, Bold, Italic, Strike, Underline, Code, CodeBlock, Paragraph, BulletList, OrderedList, ListItem,
      Link, Blockquote, HardBreak, HorizontalRule, History
    } = await MAIN_MODULE

    this.extensions = [
      // опции которые попадают в расширение tiptap
      [Blockquote, {
        renderIn: 'bubbleMenu',
        nativeOptions: {
          levels: [1, 2, 3]
        }
      }],
      [Bold, {
        renderIn: 'toolbar'
      }],
      [Link, {
        renderIn: 'bubbleMenu'
      }]
      // new Heading({
      //   levels: [1, 2, 3]
      // }),
      // new Bold(),
      // new Italic(),
      // new Strike(),
      // new Underline(),
      // new Code(),
      // new CodeBlock(),
      // new Paragraph(),
      // new BulletList(),
      // new OrderedList(),
      // new ListItem(),
      // new Link()
      // new Blockquote(),
      // new HardBreak(),
      // new HorizontalRule(),
      // new History()
    ]
  }
}
</script>
