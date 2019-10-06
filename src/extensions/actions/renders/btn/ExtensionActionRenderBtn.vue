<template>
  <v-tooltip top>
    <!--:disabled="isButtonDisabled(commands, button)"-->
    <template #activator="{ on }">
      <!--TODO options.isActive сделать реактивным -->
      <v-btn
        :class="{
          'tiptap-vuetify-editor__action-render-btn': true,
          'v-btn--active': $props[PROPS.OPTIONS].isActive($props[PROPS.CONTEXT])
        }"
        :dark="$props[PROPS.DARK]"
        small
        icon
        v-on="on"
        @click="options.onClick({ context: $props[PROPS.CONTEXT], editor: $props[PROPS.EDITOR] })"
      >
        <component
          :is="isTextIcon ? 'b' : isVuetifyIcon ? 'v-icon' : null"
          class="tiptap-vuetify-editor__btn-icon"
        >
          {{ buttonIcon }}
        </component>
      </v-btn>
    </template>
    <template>{{ tooltipText }}</template>
  </v-tooltip>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Editor } from 'tiptap'
import ExtensionActionRenderBtnOptionsInterface from './ExtensionActionRenderBtnOptionsInterface'
import TextIcon from '~/extensions/nativeExtensions/icons/TextIcon'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import IconInterface from '~/extensions/nativeExtensions/icons/IconInterface'
import { VTooltip, VBtn, VIcon } from 'vuetify/lib'

// TODO можно использовать как миксин, передавать туда сразу пропсы и не нужно будет писать PROPS = PROPS
export const PROPS = {
  EDITOR: 'editor' as const,
  OPTIONS: 'options' as const,
  CONTEXT: 'context' as const,
  DARK: 'dark' as const
}

@Component({
  components: { VTooltip, VBtn, VIcon }
})
export default class ExtensionActionRenderBtn extends Vue {
  @Prop({ type: Object, required: true })
  readonly [PROPS.EDITOR]: Editor

  @Prop({ type: Object, required: true })
  readonly [PROPS.OPTIONS]: ExtensionActionRenderBtnOptionsInterface

  @Prop({ type: Object, required: true })
  readonly [PROPS.CONTEXT]: any

  @Prop({ type: Boolean, default: false })
  readonly [PROPS.DARK]: boolean

  PROPS = PROPS

  get buttonIcon (): IconInterface {
    return this[PROPS.OPTIONS].icons[this.$tiptapVuetify.iconsGroup]
  }

  get isTextIcon () {
    return this.buttonIcon instanceof TextIcon
  }

  get isVuetifyIcon () {
    return this.buttonIcon instanceof VuetifyIcon
  }

  get tooltipText () {
    const source = this.$props[PROPS.OPTIONS].tooltip

    if (typeof source === 'function') {
      return source(this.$props[PROPS.CONTEXT], this.$props[PROPS.OPTIONS])
    }

    return source
  }
}
</script>

<style lang="stylus">
.tiptap-vuetify-editor__action-render-btn
  margin: 0 6px

.tiptap-vuetify-editor__btn-icon.v-icon.fas
  font-size: 16px
</style>
