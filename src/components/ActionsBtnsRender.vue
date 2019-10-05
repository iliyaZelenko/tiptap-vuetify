<template>
  <div>
    <span
      v-for="(action, i) in $props[PROPS.ACTIONS]"
      :key="'actions-' + i"
    >
      <action-btn
        v-if="isBtn(action)"
        :options="action.render.options"
        :context="$props[PROPS.CONTEXT]"
        :dark="$props[PROPS.DARK]"
      />
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import ExtensionActionInterface from '~/extensions/actions/ExtensionActionInterface'
import ExtensionActionRenderBtnComponent from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.vue'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.ts'

export const PROPS = {
  ACTIONS: 'actions' as const,
  CONTEXT: 'context' as const,
  DARK: 'dark' as const
}

@Component({
  components: {
    'action-btn': ExtensionActionRenderBtnComponent
  }
})
export default class ActionsBtnsRender extends Vue {
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
        height: auto !important;
        flex-wrap: wrap;
</style>
