<template>
  <div
    v-if="editor"
    class="tiptap-vuetify-editor"
  >
    <!-- hasLink || -->
    <bubble
      v-if="availableActions.bubbleMenu.length"
      :editor="editor"
      :actions="availableActions.bubbleMenu"
    />

    <VCard v-if="$props[PROPS.TYPE] === EDITOR_TYPES_ENUM.card">
      <slot name="toolbar-before" />

      <toolbar
        v-if="availableActions.toolbar.length"
        :editor="editor"
        :actions="availableActions.toolbar"
        :toolbar-attributes="$props[PROPS.TOOLBAR_ATTRIBUTES]"
      >
        <!-- Позволяет пользователю показывать свой тулбар -->
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
    </VCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Editor, EditorContent } from 'tiptap'
import Toolbar from '~/components/Toolbar.vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import { EVENTS, PROPS, EDITOR_TYPES_ENUM } from '~/const'
import Bubble from '~/components/Bubble.vue'
import { Link } from '~/main'
import { Placeholder } from 'tiptap-extensions'
import { ExtensionActionRenderInEnum } from '~/extensions/actions/ExtensionActionRenderInEnum'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import AbstractExtension from '~/extensions/AbstractExtension'
// import { VCard } from 'vuetify/lib'

@Component({
  components: {
    Bubble,
    EditorContent,
    Toolbar
    // VCard
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

  @Prop({
    type: String,
    default: EDITOR_TYPES_ENUM.card
  })
  readonly [PROPS.TYPE]: EDITOR_TYPES_ENUM

  PROPS = PROPS
  EDITOR_TYPES_ENUM = EDITOR_TYPES_ENUM
  editor: Editor | null = null
  availableActions: {
    toolbar: ExtensionActionInterface[]
    bubbleMenu: ExtensionActionInterface[]
  } = {
    toolbar: [],
    bubbleMenu: []
  }
  emitAfterOnUpdate = false

  get hasLink (): boolean {
    return this[PROPS.EXTENSIONS].some((extension: AbstractExtension) => extension instanceof Link)
  }

  get toolbarActions () {
    return this[PROPS.EXTENSIONS].filter(i => i.renderIn)
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
    const nativeExtensionsInstances: any = []
    // опции расширений по умолчанию
    const paramsDefault = {
      renderIn: ExtensionActionRenderInEnum.toolbar,
      options: {}
    }

    this[PROPS.EXTENSIONS].forEach(extensionDefinition => {
      let ExtensionClass
      let params

      // Получение расширения и его опций
      if (Array.isArray(extensionDefinition)) {
        ([ExtensionClass, params] = extensionDefinition)
        // TODO улучшить проверку, но почему-то это не работает: http://bit.ly/2ALqFJB
      } else if (extensionDefinition.prototype.availableActions) { // Если extends от AbstractExtension
        ExtensionClass = extensionDefinition
      } else {
        throw new Error('Incorrect extension declaration passed to "extensions" prop (array). ' +
          'It looks like the array\'s element is in the wrong format.')
      }

      // параметры с дефолтными значениями TODO deep merge
      const paramsFinal = { ...paramsDefault, ...params }
      const extension: AbstractExtension = new ExtensionClass(paramsFinal.options)
      // const renderInVariants = Object.values(ExtensionActionRenderInEnum)
      //
      // if (!renderInVariants.includes(options.renderIn)) {
      //   throw new Error('Please, set the "renderIn" option to one of following values: ' + renderInVariants)
      // }

      // пополнение доступных действий для конкретного renderIn
      this.availableActions[paramsFinal.renderIn].push(...extension.availableActions)

      // Сбор нативных расширений
      if (extension.nativeExtensionInstance) {
        nativeExtensionsInstances.push(extension.nativeExtensionInstance)
      }
    })
    const extensions = [
      ...this[PROPS.NATIVE_EXTENSIONS],
      ...nativeExtensionsInstances
    ]

    if (this[PROPS.PLACEHOLDER]) {
      // !!!!!!!!!!!!!!!!! TODO ONLY FOR TEST (update: не помню что это, возможно и не нужно убирать код ниже)
      extensions.push(new Placeholder({
        emptyNodeClass: 'tiptap-vuetify-editor__paragraph--is-empty',
        emptyNodeText: this[PROPS.PLACEHOLDER],
        showOnlyWhenEditable: true
      }))
    }

    this.editor = new Editor({
      extensions,
      ...this[PROPS.EDITOR_PROPERTIES],
      content: this[PROPS.VALUE],
      onUpdate: this.onUpdate.bind(this)
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
      outline: none !important
      margin: 20px !important

  /* Элемент не обязательно содрежится в .tiptap-vuetify-editor, может использоваться для отображения результата
  редактора в не редактора */
  .tiptap-vuetify-editor__content
    transition: all 2s
    overflow: auto !important
    padding: 5px

    h1, h2, h3, h4
      margin: 10px 0 20px !important

    blockquote
      border-left: .25em solid #dfe2e5
      color: #6a737d
      padding-left: 1em
      margin: 20px 0 !important

    code
      padding: 0 4px !important
      margin: 0 5px !important

    pre code
        padding: 8px !important
        margin: 0 5px !important

    code:before, code:after
      content: none !important
      letter-spacing: initial !important

    p
      margin-top: 16px !important
      margin-bottom: 16px !important
      /* без этого пустой <p> в превью не будет занимать пространство (чтобы был вид пустой строки) как он это делает в редакторе */
      min-height: 1rem

      // placeholder
      &.tiptap-vuetify-editor__paragraph--is-empty
        &:first-child::before
          content: attr(data-empty-text)
          float: left
          color: #aaa
          pointer-events: none
          height: 0
          font-style: italic
</style>
