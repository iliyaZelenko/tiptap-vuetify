<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
  >
    <template #activator="{ on: onDialog }">
      <v-tooltip top>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn
            :class="{
              'tiptap-vuetify-editor__action-render-btn': true,
              'v-btn--active': $props[PROPS.OPTIONS].isActive($props[PROPS.CONTEXT])
            }"
            :dark="$props[PROPS.DARK]"
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
      native-extension-name="image"
      :image-sources="imageSources"
      :image-sources-override="imageSourcesOverride"
      @close="dialog = false"
    />
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { VTooltip, VBtn, VIcon, VDialog } from 'vuetify/lib'
import ImageWindow from '~/extensions/nativeExtensions/image/ImageWindow.vue'
import ExtensionActionRenderBtn from '~/extensions/actions/renders/btn/ExtensionActionRenderBtn.vue'
import { mixins } from 'vue-class-component'
// TODO can be used as a mixin, immediately send props and you won’t need to write PROPS = PROPS
export const PROPS_IMG_BTN = {
  IMAGE_SOURCES: 'imageSources' as const,
  IMAGE_SOURCES_OVERRIDE: 'imageSourcesOverride' as const
}
  @Component({
    components: { ImageWindow, VTooltip, VBtn, VIcon, VDialog }
  })
export default class ImageExtensionActionRenderBtn extends mixins(ExtensionActionRenderBtn) {
    @Prop({
      type: Array,
      required: false
    })
  readonly [PROPS_IMG_BTN.IMAGE_SOURCES]: anyR
    @Prop({
      type: Boolean,
      required: false
    })
    readonly [PROPS_IMG_BTN.IMAGE_SOURCES_OVERRIDE]: any
    dialog: boolean = false

    PROPS_IMG_BTN = PROPS_IMG_BTN;
}
</script>
