<template>
  <div>
    <!-- :toolbar-attributes="{ color: 'yellow' }"
    min-height="500"
    max-height="600"
    :editor-properties="editorProperties"
   -->
    <tiptap-vuetify
      v-model="content"
      :extensions="extensions"
      placeholder="Write something …"
      output-format="json"
      @keydown="onkeydown"
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
    // editorProperties: {
    //   editorProps: {
    //     handleKeyDown (a, b, c) {
    //       console.log('handleKeyDown', a, b, c)
    //     }
    //   }
    // },
    extensions: null,
    a: '',
    b:'',
    test: true
  }),
  computed: {
    content: {
      get() {
        return this.test ? this.a : this.b
      },
      set(value) {
        if(this.test) {
          this.a = value
        }else {
          this.b = value
        }
      }
    }
  },
  async created () {
    const {
      Heading, Bold, Italic, Strike, Underline, Code, CodeBlock, Paragraph, BulletList, OrderedList, ListItem,
      Link, Blockquote, HardBreak, HorizontalRule, History, Image
    } = await MAIN_MODULE

    this.extensions = [
      Code,
      CodeBlock,
      HorizontalRule,
      Paragraph,
      History,
      HardBreak, // позволяет переносить через Shift + Ctrl + Enter
      Underline,
      Strike,
      Italic,
      ListItem, // если нужно использовать список (BulletList, OrderedList)
      BulletList,
      OrderedList,
      Image,
      [Heading, {
        // Опции которые попадают в расширение tiptap
        options: {
          levels: [1, 2, 3]
        }
      }],
      // но опции не обязательно указывать если нужно чтобы renderIn: 'toolbar', это по умолчанию.
      [Bold, {
        renderIn: 'toolbar'
      }],
      [Blockquote, {
        renderIn: 'bubbleMenu',
        options: {
          levels: [1, 2, 3]
        }
      }],
      [Link, {
        renderIn: 'bubbleMenu'
      }]
    ]
  },
  methods: {
    onkeydown (event) {
      console.log('event', event.key)
    }
  }
}
</script>
