<template>
  <v-tooltip top>
    <!--:disabled="isButtonDisabled(commands, button)"-->
    <template #activator="{ on }">
      <!--TODO options.isActive сделать реактивным -->
      <v-btn
        :class="{ 'v-btn--active': $props[PROPS.OPTIONS].isActive($props[PROPS.CONTEXT]) }"
        :dark="$props[PROPS.DARK]"
        icon
        v-on="on"
        @click="options.onClick($props[PROPS.CONTEXT])"
      >
        <component :is="isTextIcon ? 'b' : isVuetifyIcon ? 'v-icon' : null">
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
import ExtensionActionRenderBtnOptionsInterface from './ExtensionActionRenderBtnOptionsInterface'
import TextIcon from '~/extensions/nativeExtensions/icons/TextIcon'
import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
import IconInterface from '~/extensions/nativeExtensions/icons/IconInterface'

export const PROPS = {
  OPTIONS: 'options' as const,
  CONTEXT: 'context' as const,
  DARK: 'dark' as const
}

@Component
export default class ExtensionActionRenderBtn extends Vue {
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
