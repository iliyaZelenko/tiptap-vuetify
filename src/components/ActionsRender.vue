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
        :disabled="$props[PROPS.DISABLED]"
      />
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtnComponent from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.vue'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'
import { Editor } from 'tiptap'

export const PROPS = {
  EDITOR: 'editor' as const,
  ACTIONS: 'actions' as const,
  CONTEXT: 'context' as const,
  DARK: 'dark' as const,
  DISABLED: 'disabled' as const
}

@Component({
  components: {
    'action-btn': ExtensionActionRenderBtnComponent
  }
})
export default class ActionsRender extends Vue {
  @Prop({ type: Object, required: true })
  readonly [PROPS.EDITOR]: Editor

  @Prop({ type: Boolean, default: false })
  readonly [PROPS.DISABLED]: boolean

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

  isBtn (action: ExtensionActionInterface): boolean {
    return action.render instanceof ExtensionActionRenderBtn
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
