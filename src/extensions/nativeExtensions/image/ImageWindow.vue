<template>
  <v-dialog
    :value="value"
    max-width="500px"
  >
    <v-card>
      <v-card-title>
        <span class="headline">
          {{ $i18n.getMsg('extensions.Image.window.title') }}
        </span>

        <v-spacer />

        <v-btn
          icon
          @click="close"
        >
          <v-icon>{{ COMMON_ICONS.close[$tiptapVuetify.iconsGroup] }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-expand-transition>
          <div v-show="previewSources.length">
            <v-row
              no-gutters
              justify="center"
              align="center"
            >
              <v-col
                v-for="(source, i) of previewSources"
                :key="'preview' + i"
                cols="4"
              >
                <v-img
                  :src="source.src"
                  :alt="source.alt"
                  class="text-right"
                >
                  <v-btn
                    icon
                    small
                    dark
                    @click="removeSource(source)"
                  >
                    <v-icon small>
                      close
                    </v-icon>
                  </v-btn>
                </v-img>
                <v-text-field
                  v-model="source.alt"
                  label="Alt Text"
                />
              </v-col>
            </v-row>
          </div>
        </v-expand-transition>
      </v-card-text>
      <v-tabs fixed-tabs>
        <template v-for="(imageTab, i) in imageTabs">
          <v-tab
            :key="'tab-' + i"
            :href="'#tab-' + i"
          >
            {{ imageTab.name }}
          </v-tab>
          <v-tab-item
            :key="'tab-item-' + i"
            :value="'tab-' + i"
          >
            <component
              :is="imageTab.component"
              class="pa-4"
              @select-file="onFileSelect"
            />
          </v-tab-item>
        </template>
      </v-tabs>
      <v-card-actions>
        <v-btn
          text
          @click="close"
        >
          {{ $i18n.getMsg('extensions.Image.window.buttons.close') }}
        </v-btn>

        <v-btn
          :disabled="isDisabled"
          text
          @click="apply"
        >
          {{ $i18n.getMsg('extensions.Image.window.buttons.apply') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component'
import { Component, Prop } from 'vue-property-decorator'
import { VRow, VCol, VImg, VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn, VSpacer, VIcon, VTextField, VTabs, VTab, VTabsSlider, VTabItem, VTabsItems } from 'vuetify/lib'
import I18nMixin from '~/mixins/I18nMixin'
import ImageUploadArea from '~/extensions/nativeExtensions/image/ImageUploadArea.vue'
import ImageForm from '~/extensions/nativeExtensions/image/ImageForm.vue'
import ImageSource from '~/extensions/nativeExtensions/image/ImageSource'
import { VExpandTransition } from 'vuetify/lib/components/transitions'
import { COMMON_ICONS } from '~/configs/theme'

export const PROPS = {
  VALUE: 'value' as const,
  CONTEXT: 'context' as const,
  EDITOR: 'editor' as const,
  IMAGE_SOURCES: 'imageSources' as const,
  IMAGE_SOURCES_OVERRIDE: 'imageSourcesOverride' as const,
  NATIVE_EXTENSION_NAME: 'nativeExtensionName' as const
}

@Component({
  components: { VRow, VCol, VExpandTransition, ImageForm, ImageUploadArea, VImg, VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn, VSpacer, VIcon, VTextField, VTabs, VTab, VTabsSlider, VTabItem, VTabsItems }
})
export default class ImageWindow extends mixins(I18nMixin) {
  @Prop({
    type: Boolean,
    default: false
  })
  readonly [PROPS.VALUE]: boolean

  @Prop({
    type: String,
    required: true
  })
  readonly [PROPS.NATIVE_EXTENSION_NAME]: string

  @Prop({
    type: Object,
    required: true
  })
  readonly [PROPS.CONTEXT]: any

  @Prop({
    type: Object,
    required: true
  })
  readonly [PROPS.EDITOR]: any

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

  readonly COMMON_ICONS = COMMON_ICONS

  readonly defaultImageTabs = [
    {
      name: 'URL',
      component: ImageForm
    },
    {
      name: 'Upload',
      component: ImageUploadArea
    }
  ]

  inputPreviewSources: ImageSource[] = []

  get imageTabs () {
    if (this[PROPS.IMAGE_SOURCES]) {
      if (this[PROPS.IMAGE_SOURCES_OVERRIDE]) {
        return this[PROPS.IMAGE_SOURCES]
      }
      return this.defaultImageTabs.concat(this[PROPS.IMAGE_SOURCES])
    }
    return this.defaultImageTabs
  }

  get previewSources () {
    return this.inputPreviewSources.filter(Boolean)
  }

  get isDisabled () {
    return !this.previewSources.length
  }

  removeSource (source: ImageSource) {
    if (this.inputPreviewSources.includes(source)) {
      this.inputPreviewSources = this.inputPreviewSources.filter(i => i !== source)
    }
  }

  onFileSelect (file: ImageSource) {
    if (file.src !== null && file.src !== '') {
      const existingFile = this.findFile(file)
      if (existingFile !== null) {
        existingFile.alt = file.alt
      } else {
        this.inputPreviewSources.push(file)
      }
    }
  }

  findFile (file: ImageSource) {
    const matches: ImageSource[] = this.inputPreviewSources.filter((source: ImageSource) => {
      return (source.src === file.src)
    })
    if (matches.length > 0) {
      return matches[0]
    }
    return null
  }

  apply () {
    this.previewSources.forEach(src => {
      this[PROPS.CONTEXT].commands[this[PROPS.NATIVE_EXTENSION_NAME]](src)
    })

    this.close()
    this[PROPS.EDITOR].focus()
  }

  close () {
    this.$destroy()
    this.$el.parentNode!.removeChild(this.$el)
  }
}
</script>
