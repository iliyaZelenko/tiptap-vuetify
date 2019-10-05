<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <!-- Open/Closed principle https://css-tricks.com/creating-vue-js-component-instances-programmatically/ -->
  <div class="tiptap-vuetify-editor__toolbar">
    <editor-menu-bar
      :editor="editor"
      v-slot="menuBarContext"
    >
      <!-- :buttons="buttons" -->
      <slot
        name="default"
        :isActive="menuBarContext.isActive"
        :commands="menuBarContext.commands"
      >
        <v-toolbar
          v-bind="{
            ...toolbarConfig,
            ...toolbarAttributes
          }"
        >
          <actions-btns-render
            :actions="actions"
            :context="getContext(menuBarContext)"
          />
        </v-toolbar>
      </slot>
    </editor-menu-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Editor, EditorMenuBar } from 'tiptap'
import toolbarConfig from '~/configs/toolbar'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'
import ActionsBtnsRender from '~/components/ActionsBtnsRender.vue'

@Component({
  components: {
    ActionsBtnsRender,
    EditorMenuBar
  }
})
export default class Toolbar extends Vue {
  @Prop({ type: Object, required: true })
  readonly editor: Editor

  @Prop({
    type: Array,
    default: () => []
  })
  readonly actions: ExtensionActionInterface[]

  @Prop({
    type: [Array, Object],
    default: () => ({})
  })
  readonly toolbarAttributes!: any

  mounted () {
    console.log(this.actions)
  }

  getContext (menuBarContext) {
    return {
      ...menuBarContext,
      editor: this.editor
    }
  }

  isBtn (action: ExtensionActionInterface): boolean {
    return action.render instanceof ExtensionActionRenderBtn
  }

  toolbarConfig = toolbarConfig
}
</script>

<style lang="stylus">
  .tiptap-vuetify-editor__toolbar
    .v-toolbar
      .v-toolbar__content
        height: auto !important;
        flex-wrap: wrap;
</style>
