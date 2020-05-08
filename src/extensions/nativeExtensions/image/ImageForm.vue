<template>
  <div>
    <v-text-field
      v-model="form.src"
      :label="$i18n.getMsg('extensions.Image.window.form.sourceLink')"
    />
    <v-text-field
      v-model="form.alt"
      :label="$i18n.getMsg('extensions.Image.window.form.altText')"
    />
    <v-btn @click="addImage">
      {{ $i18n.getMsg('extensions.Image.window.form.addImage') }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { mixins } from 'vue-class-component'
import { Component } from 'vue-property-decorator'
import { VTextField } from 'vuetify/lib'
import I18nMixin from '../../../mixins/I18nMixin'
import EVENTS from '~/extensions/nativeExtensions/image/events'

@Component({
  components: { VTextField }
})
export default class ImageForm extends mixins(I18nMixin) {
  form: {
    src: null | string
    alt: null | string
  } = {
    src: null, // 'https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg'
    alt: null
  }

  addImage () {
    this.$emit(EVENTS.SELECT_FILE, {
      src: this.form.src,
      alt: this.form.alt
    })
    this.form.src = null
    this.form.alt = null
  }
}
</script>

<style scoped>

</style>
