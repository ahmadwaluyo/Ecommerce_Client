import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueToastify from 'vue-toastify'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(FontAwesomeIcon)
Vue.use(VueToastify)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
