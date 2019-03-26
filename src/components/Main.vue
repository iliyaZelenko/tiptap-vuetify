<template>
  <div class="tiptap-vuetify-editor">
    <v-card v-if="editor">
      <slot name="toolbar-before" />

      <toolbar
        :editor="editor"
        :buttons="buttons"
        :toolbar-attributes="$props[PROPS.TOOLBAR_ATTRIBUTES]"
      >
        <template
          #default="scopedSlot"
          v-if="$scopedSlots.toolbar"
        >
          <slot
            name="toolbar"
            v-bind="scopedSlot"
          />
        </template>
      </toolbar>

      <slot name="toolbar-after" />

      <div class="tiptap-vuetify-editor__content">
        <editor-content
          :editor="editor"
        />
      </div>

      <slot name="footer" />
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
import Toolbar from '~/components/Toolbar.vue'
import { Prop, Watch } from 'vue-property-decorator'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { PROPS, EVENTS } from '~/const'

@Component({
  components: {
    EditorContent,
    Toolbar
  }
})
export default class Main extends Vue {
  @Prop({ type: String, default: '' })
  readonly [PROPS.VALUE]: string

  @Prop({ type: Array, default: () => [] })
  readonly [PROPS.EXTENSIONS]: any

  @Prop({
    type: [Array, Object],
    default: () => ({})
  })
  readonly [PROPS.TOOLBAR_ATTRIBUTES]: any

  @Prop({
    type: Object,
    default: () => ({})
  })
  readonly [PROPS.EDITOR_PROPERTIES]: any

  @Prop({
    type: Array,
    default: () => []
  })
  readonly [PROPS.NATIVE_EXTENSIONS]: any

  PROPS = PROPS
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

    this[PROPS.EXTENSIONS].forEach((adapter: AbstractExtensionAdapter) => {
      this.buttons.push(...adapter.availableButtons)

      if (adapter.extensionInstance) {
        extensionsInstances.push(adapter.extensionInstance)
      }
    })

    this.editor = new Editor({
      ...this[PROPS.EDITOR_PROPERTIES],
      extensions: [
        ...this[PROPS.NATIVE_EXTENSIONS],
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
        // TODO
        new Link(),
        // new Strike(),
        // new Underline(),
        // new History(),
        // new HorizontalRule(),
        ...extensionsInstances
      ],
      content: this[PROPS.VALUE],
      onUpdate: this.onUpdate
    })

    this.$emit(EVENTS.INIT, {
      editor: this.editor
    })
  }
  onUpdate (info) {
    this.emitAfterOnUpdate = true
    this.$emit(EVENTS.INPUT, info.getHTML(), info)
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
      border-left: .25em solid #dfe2e5;
      color: #6a737d;
      padding-left: 1em;
      margin: 20px 0 !important

    code
      padding: 0 4px !important
      margin: 0 5px !important

    pre code
        padding: 8px !important;
        margin: 0 5px !important

    code:before, code:after
      content: none !important;
      letter-spacing: initial !important;

    p
      margin-top: 16px !important;
      margin-bottom: 16px !important;
</style>
