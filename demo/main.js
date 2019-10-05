import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import 'vuetify/dist/vuetify.min.css'

// icons
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

import App from './App'
import router from './router'

import '../dist/main.css'
import { MAIN_MODULE } from './config'

const vuetify = new Vuetify()

MAIN_MODULE.then(({ TiptapVuetifyPlugin }) => {
  Vue.use(Router)
  Vue.use(Vuetify)
  Vue.use(TiptapVuetifyPlugin, {
    vuetify,
    iconsGroup: 'fa'
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
