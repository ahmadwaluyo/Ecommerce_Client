import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import VueToastify from 'vue-toastify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueToastify)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
