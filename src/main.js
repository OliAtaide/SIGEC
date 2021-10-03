import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://gestaodecasos-edital043.vercel.app/api/'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

new Vue({
  router,
  store,
  axios,
  vuetify,
  render: h => h(App)
}).$mount('#app')
