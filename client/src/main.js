import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueCookies from 'vue-cookies'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './stores/store'

Vue.config.productionTip = false

//testyu

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.prototype.$apiURL = 'http://sagelysown.owlinventory.com/api/'
Axios.defaults.baseURL = 'http://sagelysown.owlinventory.com/'
Axios.defaults.withCredentials = true;
Vue.prototype.$http = Axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')