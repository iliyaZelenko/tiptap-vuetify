<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="tiptap-vuetify-editor__toolbar">
    <editor-menu-bar :editor="editor">
      <!--Вместо #default можно v-slot-->
      <template #default="{ commands, isActive }">
        <slot
          name="default"
          :buttons="buttons"
          :isActive="isActive"
          :commands="commands"
        >
          <v-toolbar
            v-bind="{
              ...toolbarConfig,
              ...toolbarAttributes
            }"
          >
            <v-tooltip
              v-for="button of buttons"
              :key="button.tooltip"
              bottom
            >
              <!--:disabled="isButtonDisabled(commands, button)"-->
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  :class="{ 'v-btn--active': isButtonActive(isActive, button) }"
                  icon
                  @click="onButtonClick(commands, button)"
                >
                  <b v-if="isButtonHasTextIcon(button)">
                    {{ getButtonIcon(button) }}
                  </b>
                  <v-icon v-else-if="isButtonHasVuetifyIcon(button)">
                    {{ getButtonIcon(button) }}
                  </v-icon>
                </v-btn>
              </template>
              <template>{{ button.tooltip }}</template>
            </v-tooltip>
          </v-toolbar>
        </slot>
      </template>
    </editor-menu-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Editor, EditorMenuBar } from 'tiptap'
import { Prop } from 'vue-property-decorator'
// import themeConfig from '~/configs/theme'
import TextIcon from '~/extensionAdapters/icons/TextIcon'
import VuetifyIcon from '~/extensionAdapters/icons/VuetifyIcon'
import Plugin from '~/main'
import toolbarConfig from '~/configs/toolbar'

@Component({
  components: {
    EditorMenuBar
  }
})
export default class Menu extends Vue {
  @Prop({ type: Object, required: true })
  readonly editor!: Editor

  @Prop({
    type: Array,
    default: () => []
  })
  readonly buttons!: any

  @Prop({
    type: [Array, Object],
    default: () => ({})
  })
  readonly toolbarAttributes!: any

  toolbarConfig = toolbarConfig

  isButtonHasTextIcon (button) {
    return this.getButtonIcon(button) instanceof TextIcon
  }

  isButtonHasVuetifyIcon (button) {
    return this.getButtonIcon(button) instanceof VuetifyIcon
  }

  isButtonActive (isActive, button): boolean {
    return !!isActive[button.name] && isActive[button.name](button.isActiveOptions)
  }

  onButtonClick (commands, button) {
    return commands[button.name](button.clickOptions)
  }

  getButtonIcon (button) {
    return button.icons[Plugin.iconsGroup]
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
