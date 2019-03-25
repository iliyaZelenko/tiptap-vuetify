<template>
  <div class="tiptap-vuetify-editor">
    <v-card v-if="editor">
      <editor-menu
        :editor="editor"
        :buttons="buttons"
        :toolbar-attributes="toolbarAttributes"
      />
      <div class="tiptap-vuetify-editor__content">
        <editor-content
          :editor="editor"
        />
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Editor, EditorContent } from 'tiptap'
import {
  Link
} from 'tiptap-extensions'
import Menu from '~/components/Menu.vue'
import { Prop, Watch } from 'vue-property-decorator'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'

@Component({
  components: {
    EditorContent,
    EditorMenu: Menu
  }
})
export default class Main extends Vue {
  @Prop({ type: String, default: '' }) readonly value!: string
  @Prop({ type: Array, default: () => [] }) readonly extensions!: any
  @Prop({
    type: [Array, Object],
    default: () => ({})
  }) readonly toolbarAttributes!: any

  editor: Editor | null = null
  buttons: any = []
  emitAfterOnUpdate: boolean = false

  @Watch('value')
  onValueChange (val) {
    if (this.emitAfterOnUpdate) {
      this.emitAfterOnUpdate = false

      return
    }

    this.editor.setContent(val)
  }

  mounted () {
    const extensionsInstances: any = []

    this.extensions.forEach((adapter: AbstractExtensionAdapter) => {
      this.buttons.push(...adapter.availableButtons)

      if (adapter.extensionInstance) {
        extensionsInstances.push(adapter.extensionInstance)
      }
    })

    this.editor = new Editor({
      extensions: [
        // new Blockquote(),
        // new CodeBlock(),
        // new HardBreak(),
        // new Heading({ levels: [1, 2, 3] }),
        // new BulletList(),
        // new OrderedList(),
        // new ListItem(),
        //// new TodoItem(),
        //// new TodoList(),
        // new Bold(),
        // new Code(),
        // new Italic(),
        new Link(),
        // new Strike(),
        // new Underline(),
        // new History(),
        // new HorizontalRule(),
        ...extensionsInstances
      ],
      content: this.value,
      onUpdate: this.onUpdate
    })
  }
  onUpdate (info) {
    this.emitAfterOnUpdate = true
    this.$emit('input', info.getHTML(), info)
  }

  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>

<style lang="stylus">
  .tiptap-vuetify-editor
    .ProseMirror
      outline: none !important;
      margin: 20px !important;

  /* Элемент не обязательно содрежится в .tiptap-vuetify-editor, может использоваться для отображения результата
  редактора в не редактора */
  .tiptap-vuetify-editor__content
    overflow: auto !important;
    padding: 5px;

    h1, h2, h3, h4
      margin: 10px 0 20px !important

    blockquote
      border-left: 4px solid lightgray !important;
      padding-left: 12px !important;
      overflow: auto !important;
      margin: 20px 0 !important

    code
      padding: 8px !important;
      margin: 0 5px !important

    code:before, code:after
      content: none !important;
      letter-spacing: initial !important;

    p
      margin-top: 16px !important;
      margin-bottom: 16px !important;
</style>
