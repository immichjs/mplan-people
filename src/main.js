import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import Vuex from 'vuex'
import store from './store'
import router from './router'

import './assets/tailwind.css'
import 'animate.css'
import 'boxicons'

Vue.use(Vuex)
Vue.use(VueMeta, { refreshOnceOnNavegation: true })
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
