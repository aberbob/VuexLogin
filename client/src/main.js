import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import store from './stores/store'

Vue.config.productionTip = false

//testyu

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.prototype.$apiURL = 'http://sagelysown.owlinventory.com/api/'
// axios.defaults.baseURL = 'http://sagelysown.owlinventory.com/'
// axios.defaults.withCredentials = true;
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')