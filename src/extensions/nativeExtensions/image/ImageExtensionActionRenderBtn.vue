<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on: onDialog }">
      <v-tooltip top>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            :class="{
          'tiptap-vuetify-editor__action-render-btn': true,
          'v-btn--active': $props[PROPS.OPTIONS].isActive($props[PROPS.CONTEXT])
        }"
            :dark="$props[PROPS.DARK]"
            color="green"
            small
            icon
            v-on="{ ...tooltip, ...onDialog }"
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
    <image-window
      :editor="editor"
      :context="context"
      nativeExtensionName="image"
      :imageSources="imageSources"
      :imageSourcesOverride="imageSourcesOverride"
      @close="dialog = false"
    />
  </v-dialog>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Prop } from 'vue-property-decorator'
  import { Editor } from 'tiptap'
  import ExtensionActionRenderBtnOptionsInterface from '~/extensions/actions/renders/btn/ExtensionActionRenderBtnOptionsInterface';
  import TextIcon from '~/extensions/nativeExtensions/icons/TextIcon'
  import VuetifyIcon from '~/extensions/nativeExtensions/icons/VuetifyIcon'
  import IconInterface from '~/extensions/nativeExtensions/icons/IconInterface'
  import { VTooltip, VBtn, VIcon, VDialog } from 'vuetify/lib'
  import ConsoleLogger from '~/logging/ConsoleLogger'
  import ImageWindow from '~/extensions/nativeExtensions/image/ImageWindow.vue';
  // TODO можно использовать как миксин, передавать туда сразу пропсы и не нужно будет писать PROPS = PROPS
  export const PROPS = {
    EDITOR: 'editor' as const,
    OPTIONS: 'options' as const,
    CONTEXT: 'context' as const,
    DARK: 'dark' as const,
    IMAGE_SOURCES: 'imageSources' as const,
    IMAGE_SOURCES_OVERRIDE: 'imageSourcesOverride' as const,
  }
  @Component({
    components: {ImageWindow, VTooltip, VBtn, VIcon, VDialog }
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
    @Prop({
      type: Array,
      required: false
    })
    readonly [PROPS.IMAGE_SOURCES]: any
    @Prop({
      type: Boolean,
      required: false
    })
    readonly [PROPS.IMAGE_SOURCES_OVERRIDE]: any
    PROPS = PROPS
    dialog: boolean = false
    get buttonIcon (): IconInterface {
      const icon = this[PROPS.OPTIONS].icons[this.$tiptapVuetify.iconsGroup]
      if (!icon) {
        ConsoleLogger.warn('No icon was provided in extension options.')
        return 'No icon'
      }
      return icon
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
