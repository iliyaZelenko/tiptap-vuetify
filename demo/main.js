import Vue from 'vue'
import Vuetify, {
  // Components used in demo
  VApp, VContent, VContainer,
  // Components used in this package
  VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn, VSpacer, VIcon, VTextField, VTooltip, VToolbar
} from 'vuetify/lib'
import Router from 'vue-router'
import 'vuetify/dist/vuetify.min.css'

// icons
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App'
import router from './router'

// import '../dist/main.css'
import { MAIN_MODULE } from './config'

const vuetify = new Vuetify({
  lang: {
    current: 'en' // en | es | fr | pl | ru | uk | ptbr | tr | he | nl | ja | de | ko | zhHans | fa | sv | cs | it | el
  }
})

MAIN_MODULE.then(({ TiptapVuetifyPlugin }) => {
  Vue.use(Router)
  Vue.use(Vuetify, {
    components: {
      // Components used in demo
      VApp,
      VContent,
      VContainer,
      // Components used in this package
      VDialog,
      VCard,
      VCardTitle,
      VCardText,
      VCardActions,
      VBtn,
      VSpacer,
      VIcon,
      VTextField,
      VTooltip,
      VToolbar
    },
    directives: {}
  })
  Vue.use(TiptapVuetifyPlugin, {
    vuetify,
    iconsGroup: 'mdi' // VuetifyIconsGroups (fa, md, mdi, mdiSvg)
  })

  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    vuetify,
    render: h => h(App)
  })
})
