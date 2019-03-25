<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="tiptap-vuetify-editor__toolbar">
    <editor-menu-bar :editor="editor">
      <template v-slot="{ commands, isActive }">
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


          <!--
          <v-btn
            :class="{ 'v-btn--active': isActive.bold() }"
            icon
            @click="commands.bold"
          >
            <v-icon>
              format_bold
            </v-icon>
          </v-btn>


          <v-btn
            :class="{ 'v-btn--active': isActive.italic() }"
            icon
            @click="commands.italic"
          >
            <v-icon>
              format_italic
            </v-icon>
          </v-btn>


          <v-btn
            :class="{ 'v-btn--active': isActive.strike() }"
            icon
            @click="commands.strike"
          >
            <v-icon>
              format_strikethrough
            </v-icon>
          </v-btn>


          <v-btn
            :class="{ 'v-btn--active': isActive.underline() }"
            icon
            @click="commands.underline"
          >
            <v-icon>
              format_underline
            </v-icon>
          </v-btn>

          <v-btn
            :class="{ 'v-btn--active': isActive.code() }"
            flat
            small
            @click="commands.code"
          >
            <v-icon left>
              code
            </v-icon>

            fragment
          </v-btn>

          <v-btn
            :class="{ 'v-btn--active': isActive.code_block(), 'ml-0': true }"
            flat
            small
            @click="commands.code_block"
          >
            <v-icon left>
              code
            </v-icon>

            block
          </v-btn>

          <v-btn
            :class="{ 'v-btn--active': isActive.paragraph() }"
            icon
            @click="commands.paragraph"
          >
            <v-icon>
              format_textdirection_l_to_r
            </v-icon>
          </v-btn>

          <v-btn
            :class="{ 'v-btn--active': isActive.heading({ level: 1 }) }"
            icon
            @click="commands.heading({ level: 1 })"
          >
            <b>H1</b>
          </v-btn>

          <v-btn
            :class="{ 'v-btn--active': isActive.heading({ level: 2 }) }"
            icon
            @click="commands.heading({ level: 2 })"
          >
            <b>H2</b>
          </v-btn>

          <v-btn
            :class="{ 'v-btn--active': isActive.heading({ level: 3 }) }"
            icon
            @click="commands.heading({ level: 3 })"
          >
            <b>H3</b>
          </v-btn>


          <v-btn
            :class="{ 'v-btn--active': isActive.bullet_list() }"
            icon
            @click="commands.bullet_list"
          >
            <v-icon>
              format_list_bulleted
            </v-icon>
          </v-btn>

          <v-btn
            :class="{ 'v-btn--active': isActive.ordered_list() }"
            icon
            @click="commands.ordered_list"
          >
            <v-icon>
              format_list_numbered
            </v-icon>
          </v-btn>

          <v-btn
            :class="{ 'v-btn--active': isActive.blockquote() }"
            icon
            @click="commands.blockquote"
          >
            <v-icon>
              format_quote
            </v-icon>
          </v-btn>

          <v-btn
            icon
            @click="commands.horizontal_rule"
          >
            <b>
              —
            </b>
          </v-btn>

          <v-divider
            class="mx-3"
            vertical
            inset
            height="10"
          />

          TODO disabled
          <v-btn
            icon
            @click="commands.undo"
          >
            <v-icon>
              undo
            </v-icon>
          </v-btn>

          TODO disabled
          <v-btn
            icon
            @click="commands.redo"
          >
            <v-icon>
              redo
            </v-icon>
          </v-btn>
          -->
        </v-toolbar>
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
  @Prop({ type: Object, required: true }) readonly editor!: Editor
  @Prop({ type: Array, default: () => [] }) readonly buttons!: any
  @Prop({ type: [Array, Object], default: () => ({}) }) readonly toolbarAttributes!: any

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
