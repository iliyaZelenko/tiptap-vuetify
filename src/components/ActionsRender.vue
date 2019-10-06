<template>
  <div>
    <template v-for="(action, i) in $props[PROPS.ACTIONS]">
      <action-btn
        v-if="isBtn(action)"
        :key="'action-button-' + i"
        :options="action.render.options"
        :context="$props[PROPS.CONTEXT]"
        :editor="$props[PROPS.EDITOR]"
        :dark="$props[PROPS.DARK]"
      />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtnComponent from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.vue'
// import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'
import { Editor } from 'tiptap'

export const PROPS = {
  EDITOR: 'editor' as const,
  ACTIONS: 'actions' as const,
  CONTEXT: 'context' as const,
  DARK: 'dark' as const
}

@Component({
  components: {
    'action-btn': ExtensionActionRenderBtnComponent
  }
})
export default class ActionsRender extends Vue {
  @Prop({ type: Object, required: true })
  readonly [PROPS.EDITOR]: Editor

  @Prop({
    type: Array,
    default: () => []
  })
  readonly [PROPS.ACTIONS]: ExtensionActionInterface[]

  @Prop({
    type: Object
  })
  readonly [PROPS.CONTEXT]: any

  @Prop({
    type: Boolean,
    default: false
  })
  readonly [PROPS.DARK]: boolean

  PROPS = PROPS

  // action: ExtensionActionInterface
  isBtn (): boolean {
    // TODO action.render instanceof ExtensionActionRenderBtn не срабатывает, может из-за того, что это как prop
    return true
  }
}
</script>

<style lang="stylus">
  .tiptap-vuetify-editor__toolbar
    .v-toolbar
      .v-toolbar__content
        height: auto !important
        flex-wrap: wrap
</style>
