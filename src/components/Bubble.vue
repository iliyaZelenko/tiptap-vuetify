<template>
  <editor-menu-bubble
    class="tiptap-vuetify-editor__menububble"
    :editor="editor"
    @hide="hideLinkMenu"
  >
    <template #default="{ commands, isActive, getMarkAttrs, menu }">
      <!--
      v-show="menu.isActive"
      absolute
      fixed
      // Классы не применяются:
      :content-class="{
        'tiptap-vuetify-editor__menububble-tooltip': true,
        'tiptap-vuetify-editor__menububble-tooltip--is-active': menu.isActive
      }"
      -->
      <v-tooltip
        :value="menu.isActive"
        :position-x="menu.left"
        :position-y="getMenuY(menu)"
        absolute
        top
      >
        <div>
          <form
            v-if="linkMenuIsActive"
            class="tiptap-vuetify-editor__menububble-form"
            @submit.prevent="setLinkUrl(commands.link, linkUrl)"
          >
            <v-text-field
              ref="linkInput"
              v-model="linkUrl"
              placeholder="Link"
              hide-details
              solo
              @keydown.esc="hideLinkMenu"
            />

            <v-btn
              color="success"
              type="submit"
              icon
            >
              <v-icon>
                {{ getIconByKey('save') }}
              </v-icon>
            </v-btn>

            <v-btn
              color="error"
              icon
              @click="setLinkUrl(commands.link, null)"
            >
              <v-icon>
                {{ getIconByKey('cancel') }}
              </v-icon>
            </v-btn>
          </form>

          <v-btn
            v-else
            :class="{ 'v-btn--active': isActive.link() }"
            color="primary"
            small
            @click="showLinkMenu(getMarkAttrs('link'))"
          >
            <v-icon left>
              {{ getIconByKey(
                isActive.link() ? 'linkUpdate' : 'linkAdd'
              ) }}
            </v-icon>

            {{ isActive.link() ? $i18n.getMsg('extensions.Link.bubble.updateLink') : $i18n.getMsg('extensions.Link.bubble.addLink') }}
          </v-btn>
        </div>
      </v-tooltip>
    </template>
  </editor-menu-bubble>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { Editor, EditorMenuBubble } from 'tiptap'
import { icons } from '~/extensionAdapters/Link'
import I18nMixin from '~/mixins/I18nMixin'

@Component({
  components: {
    EditorMenuBubble
  }
})
export default class Menu extends mixins(I18nMixin) {
  @Prop({ type: Object, required: true })
  readonly editor!: Editor

  linkUrl: null | string = null
  linkMenuIsActive: null | boolean = false

  getMenuY (menu) {
    // высота всей страницы - высота окна - сколько страницу прокрученно от верха
    const diff = document.documentElement.scrollHeight - window.innerHeight - window.scrollY
    // bottom позиция относитель низа окна
    const bottomRelatedToWindow = menu.bottom - diff

    // top позиция
    return window.innerHeight - bottomRelatedToWindow
  }

  getIconByKey (key) {
    return icons[key][this.$tiptapVuetify.iconsGroup]
  }

  showLinkMenu (attrs) {
    this.linkUrl = attrs.href
    this.linkMenuIsActive = true
    this.$nextTick(() => {
      // @ts-ignore
      this.$refs.linkInput.focus()
    })
  }

  hideLinkMenu () {
    this.linkUrl = null
    this.linkMenuIsActive = false
  }

  setLinkUrl (command, url) {
    command({ href: url })
    this.hideLinkMenu()
    this.editor.focus()
  }
}
</script>

<style lang="stylus">
  /*
    .tiptap-vuetify-editor__menububble
      .v-tooltip__content
        opacity: 1 !important;

    .tiptap-vuetify-editor__menububble-tooltip
      opacity: 0;

      &.tiptap-vuetify-editor__menububble-tooltip--is-active
        opacity: 1;
  */
  .tiptap-vuetify-editor__menububble-form
    display: flex;
    align-items: center;
</style>
