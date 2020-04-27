import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueAnalytics from 'vue-ua'

import { version } from '../package'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_API_KEY
  }
})

Vue.use(VueAnalytics, {
  appName: 'pedromartin.pro',
  appVersion: '0.1.0',
  trackingId: 'UA-69860247-2',
  vueRouter: router
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

// eslint-disable-next-line
console.log(`App version: ${version}`)
