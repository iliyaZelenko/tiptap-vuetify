<template>
  <div
    v-if="editor"
    class="tiptap-vuetify-editor"
  >
    <bubble
      v-if="hasLink"
      :editor="editor"
    />

    <v-card>
      <slot name="toolbar-before" />

      <toolbar
        :editor="editor"
        :buttons="buttons"
        :toolbar-attributes="$props[PROPS.TOOLBAR_ATTRIBUTES]"
      >
        <template
          v-if="$scopedSlots.toolbar"
          #default="scopedSlot"
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
import { Editor, EditorContent, Extension } from 'tiptap'
import Toolbar from '~/components/Toolbar.vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import AbstractExtensionAdapter from '~/extensionAdapters/AbstractExtensionAdapter'
import { PROPS, EVENTS } from '~/const'
import Bubble from '~/components/Bubble.vue'
import { Link } from '~/main'
import {
  Placeholder
} from 'tiptap-extensions'

@Component({
  components: {
    Bubble,
    EditorContent,
    Toolbar
  }
})
export default class TiptapVuetify extends Vue {
  @Prop({ type: String, default: '' })
  readonly [PROPS.VALUE]: string

  @Prop({ type: Array, default: () => [] })
  readonly [PROPS.EXTENSIONS]: any

  @Prop({ type: String })
  readonly [PROPS.PLACEHOLDER]: string

  @Prop({ type: String, default: 'html' })
  readonly [PROPS.OUTPUT_FORMAT]: string

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
  editorExtensions: Extension[] = []

  get hasLink (): boolean {
    return this[PROPS.EXTENSIONS].some((adapter: AbstractExtensionAdapter) => adapter instanceof Link)
  }

  @Watch('value')
  onValueChange (val) {
    if (this.emitAfterOnUpdate) {
      this.emitAfterOnUpdate = false

      return
    }

    if (this.editor) this.editor.setContent(val)
  }

  mounted () {
    const extensionsInstances: any = []

    this[PROPS.EXTENSIONS].forEach((adapter: AbstractExtensionAdapter) => {
      this.buttons.push(...adapter.availableButtons)

      if (adapter.extensionInstance) {
        extensionsInstances.push(adapter.extensionInstance)
      }
    })
    const extensions = [
      ...this[PROPS.NATIVE_EXTENSIONS],
      ...extensionsInstances,

      // TODO ONLY FOR TEST
      new Placeholder({
        emptyNodeClass: 'tiptap-vuetify-editor__paragraph--is-empty',
        emptyNodeText: this[PROPS.PLACEHOLDER],
        showOnlyWhenEditable: true
      })
    ]

    this.editor = new Editor({
      extensions,
      ...this[PROPS.EDITOR_PROPERTIES],
      content: this[PROPS.VALUE],
      onUpdate: this.onUpdate
    })

    this.$emit(EVENTS.INIT, {
      editor: this.editor
    })
  }

  onUpdate (info) {
    this.emitAfterOnUpdate = true
    let output: any

    if (this[PROPS.OUTPUT_FORMAT] === 'html') {
      output = info.getHTML()
    } else {
      output = JSON.stringify(info.getJSON())
    }

    this.$emit(EVENTS.INPUT, output, info)
  }

  beforeDestroy () {
    if (this.editor) this.editor.destroy()
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
    transition: all 2s;
    overflow: auto !important;
    padding: 5px;

    h1, h2, h3, h4
      margin: 10px 0 20px !important;

    blockquote
      border-left: .25em solid #dfe2e5;
      color: #6a737d;
      padding-left: 1em;
      margin: 20px 0 !important;

    code
      padding: 0 4px !important;
      margin: 0 5px !important;

    pre code
        padding: 8px !important;
        margin: 0 5px !important;

    code:before, code:after
      content: none !important;
      letter-spacing: initial !important;

    p
      margin-top: 16px !important;
      margin-bottom: 16px !important;
      /* без этого пустой <p> в превью не будет занимать пространство (чтобы был вид пустой строки) как он это делает в редакторе */
      min-height: 1rem;

      // placeholder
      &.tiptap-vuetify-editor__paragraph--is-empty
        &:first-child::before
          content: attr(data-empty-text);
          float: left;
          color: #aaa;
          pointer-events: none;
          height: 0;
          font-style: italic;
</style>
