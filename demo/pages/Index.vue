<template>
  <div>
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
      :toolbar-attributes="{ color: 'yellow' }"
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
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, CodeBlock, Paragraph, BulletList, OrderedList,
  ListItem, Blockquote, HardBreak, HorizontalRule, History
} from '../../dist/bundle-cjs' // '~/main' // '../../dist/bundle-umd'

export default {
  components: { TiptapVuetify },
  data: () => ({
    extensions: [
      new Heading({
        levels: [1, 2, 3]
      }),
      new Bold(),
      new Italic(),
      new Strike(),
      new Underline(),
      new Code(),
      new CodeBlock(),
      new Paragraph(),
      new BulletList(),
      new OrderedList(),
      new ListItem(),
      new Blockquote(),
      new HardBreak(),
      new HorizontalRule(),
      new History()
    ],
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `
  })
}
</script>
