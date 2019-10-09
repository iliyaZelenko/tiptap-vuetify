import Vue from 'vue'
import Vuetify, {
  VApp,
  VContent,
  VContainer
} from 'vuetify/lib'
import Router from 'vue-router'
import 'vuetify/dist/vuetify.min.css'

// icons
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App'
import router from './router'

import '../dist/main.css'
import { MAIN_MODULE } from './config'

const vuetify = new Vuetify({
  lang: {
    current: 'en' // en | es | fr | pl | ru | uk | ptbr
  }
})

MAIN_MODULE.then(({ TiptapVuetifyPlugin }) => {
  Vue.use(Router)
  Vue.use(Vuetify, {
    components: {
      VApp,
      VContent,
      VContainer
    },
    directives: {}
  })
  Vue.use(TiptapVuetifyPlugin, {
    vuetify,
    iconsGroup: 'fa' // VuetifyIconsGroups (fa, md, mdi)
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
