// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* Axios config */
axios.defaults.withCredentials = true
axios.defaults.headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:4000/',
}
axios.defaults.baseURL = 'http://localhost:4000/'
axios.defaults.credentials = 'include'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
