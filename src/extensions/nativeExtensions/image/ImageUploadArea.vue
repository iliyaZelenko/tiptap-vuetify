<template>
  <div class="tiptap-vuetify-image-upload-area">
    <input
      id="tiptap-vuetify-image-upload-area__input-file"
      type="file"
      accept="image/*"
      multiple
    >

    <label
      class="tiptap-vuetify-image-upload-area-holder"
      for="tiptap-vuetify-image-upload-area__input-file"
    >
      <div>
        <svg
          class="tiptap-vuetify-image-upload-area-holder__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="43"
          viewBox="0 0 50 43"
        >
          <path d="M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z" />
        </svg>
        <br><br>
        <h3>{{ $i18n.getMsg('extensions.Image.window.imageUpload.instruction') }}</h3>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component'
import { Component } from 'vue-property-decorator'
import I18nMixin from '~/mixins/I18nMixin'
import EVENTS from '~/extensions/nativeExtensions/image/events'

const HOLDER_CLASS = 'tiptap-vuetify-image-upload-area-holder'

@Component
export default class ImageUploadArea extends mixins(I18nMixin) {
  mounted () {
    const holder = this.$el.querySelector('.' + HOLDER_CLASS)! as HTMLElement
    const input = this.$el.querySelector('#tiptap-vuetify-image-upload-area__input-file')! as HTMLInputElement

    input.addEventListener('change', e => {
      if (e.target instanceof HTMLInputElement) {
        this.filesSelected(e.target.files)
        holder.classList.remove(HOLDER_CLASS + '--dragover')

        e.target.value = ''
      }
    })
    holder.addEventListener('dragover', () => {
      holder.classList.add(HOLDER_CLASS + '--dragover')
      return false
    })

    const dragleaveOrEndHandler = () => {
      holder.classList.remove(HOLDER_CLASS + '--dragover')
      return false
    }

    holder.addEventListener('dragleave', dragleaveOrEndHandler)
    holder.addEventListener('dragend', dragleaveOrEndHandler)
    holder.addEventListener('drop', e => {
      e.preventDefault()
      this.filesSelected(e.dataTransfer!.files)
    })
  }
  filesSelected (files: HTMLInputElement['files']) {
    [...files].forEach(file => {
      const reader = new FileReader()
      reader.addEventListener('load', readerEvent => {
        // TODO URL.createObjectURL(file) and upload
        this.$emit(EVENTS.SELECT_FILE, {
          src: readerEvent.target!.result!.toString(),
          alt: file.name
        })
      })
      reader.readAsDataURL(file)
    })
  }
}
</script>

<style lang="stylus">
#tiptap-vuetify-image-upload-area__input-file
  display none

.tiptap-vuetify-image-upload-area-holder
  background-color #c8dadf
  height 400px
  outline 2px dashed #92b0b3
  outline-offset -10px
  transition all .15s ease-in-out
  display flex !important
  justify-content center
  align-items center

  &:hover,
  &--dragover
    background-color #a5b7bc
    outline 2px dashed #648083
    color #444444
    cursor pointer

    .tiptap-vuetify-image-upload-area-holder__icon
      fill #5f777a !important

  .tiptap-vuetify-image-upload-area-holder__icon
    width 100%
    height 80px
    fill #92b0b3
    display block
    margin-bottom 40px
    transition all .15s ease-in-out
</style>
