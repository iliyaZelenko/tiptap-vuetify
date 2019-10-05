<template>
  <v-dialog
    :value="value"
    max-width="500px"
  >
    <v-card>
      <v-card-title>
        <!-- TODO i18n -->
        <span class="headline">
          Link control
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
        <v-text-field
          v-model="form.href"
          label="Href"
        />

        <!--
        <v-checkbox
          v-model="form.blank"
          label="Is blank?"
        />
        -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          flat
          @click="close"
        >
          <!-- TODO i18n -->
          Close
        </v-btn>

        <v-btn
          :disabled="isDisabled"
          :color="isRemove ? 'error' : 'primary'"
          flat
          @click="apply"
        >
          <!-- TODO i18n -->
          {{ isRemove ? 'Remove' : 'Apply' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

export const PROPS = {
  VALUE: 'value' as const,
  CONTEXT: 'context' as const,
  EDITOR: 'editor' as const,
  NATIVE_EXTENSION_NAME: 'nativeExtensionName' as const,
  HREF: 'href' as const
}

@Component
export default class LinkWindow extends Vue {
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
    type: String
  })
  readonly [PROPS.HREF]: null | string

  form = {
    href: this[PROPS.HREF],
    blank: false
  }

  get isRemove () {
    return this[PROPS.HREF] && !this.form.href
  }

  get isDisabled () {
    return this[PROPS.HREF] === this.form.href || (!this[PROPS.HREF] && !this.form.href)
  }

  apply () {
    this[PROPS.CONTEXT].commands[this[PROPS.NATIVE_EXTENSION_NAME]]({
      href: this.form.href
    })

    this.close()
    this[PROPS.CONTEXT].editor.focus()
  }

  close () {
    this.$destroy()
    this.$el.parentNode!.removeChild(this.$el)
  }
}
</script>
