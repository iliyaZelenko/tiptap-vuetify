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
          <v-icon>close</v-icon>
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
                  :src="source"
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
              </v-col>
            </v-row>
          </div>
        </v-expand-transition>

        <v-text-field
          v-model="form.src"
          :label="$i18n.getMsg('extensions.Image.window.form.sourceLink')"
        />

        <v-expand-transition>
          <div v-show="!form.src">
            <div class="text-center grey--text mt-2 mb-4">
              {{ $i18n.getMsg('extensions.Image.window.or') }}
            </div>

            <ImageUploadArea @select-files="onFilesSelect" />
          </div>
        </v-expand-transition>
      </v-card-text>
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
import { VRow, VCol, VImg, VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn, VSpacer, VIcon, VTextField } from 'vuetify/lib'
import I18nMixin from '~/mixins/I18nMixin'
import ImageUploadArea from '~/extensions/nativeExtensions/image/ImageUploadArea.vue'
import { VExpandTransition } from 'vuetify/lib/components/transitions'

export const PROPS = {
  VALUE: 'value' as const,
  CONTEXT: 'context' as const,
  EDITOR: 'editor' as const,
  NATIVE_EXTENSION_NAME: 'nativeExtensionName' as const
}

@Component({
  components: { VRow, VCol, VExpandTransition, ImageUploadArea, VImg, VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn, VSpacer, VIcon, VTextField }
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

  form: {
    src: null | string
  } = {
    src: null // 'https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg'
  }
  inputPreviewSources: string[] = []

  get previewSources () {
    return [this.form.src, ...this.inputPreviewSources].filter(Boolean)
  }

  get isDisabled () {
    return !this.previewSources.length
  }

  removeSource (source) {
    if (this.inputPreviewSources.includes(source)) {
      this.inputPreviewSources = this.inputPreviewSources.filter(i => i !== source)
    } else if (this.form.src === source) {
      this.form.src = null
    }
  }

  onFilesSelect (files: HTMLInputElement['files']) {
    [...files].forEach(file => {
      const reader = new FileReader()

      reader.addEventListener('load', readerEvent => {
        // TODO URL.createObjectURL(file) and upload
        this.inputPreviewSources.push(readerEvent.target!.result!.toString())
      })
      reader.readAsDataURL(file)
    })
  }

  apply () {
    this.previewSources.forEach(src => {
      this[PROPS.CONTEXT].commands[this[PROPS.NATIVE_EXTENSION_NAME]]({
        // TODO alt, title
        src,
        alt: 'Image'
      })
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
