import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import i18n from './i18n'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueAnalytics from 'vue-ua'

Vue.config.productionTip = false

let mapsApiKey = 'AIzaSyA0rANX07hh6ASNKdBr4mZH0KZSqbHYc3Q'
if (process.env.NODE_ENV === 'production') { mapsApiKey = 'AIzaSyBbEngXyVxlkJ__3PP1aHH1j_iH4Z6OphI' }

Vue.use(VueGoogleMaps, {
  load: {
    key: mapsApiKey
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
