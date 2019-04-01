import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { getMsg } from '~/i18n/index.ts'

const namespace = '$i18n'

@Component
export default class I18nMixin extends Vue {
  get [namespace] () {
    return {
      getMsg
    }
  }
}
