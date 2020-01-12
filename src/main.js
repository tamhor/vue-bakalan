import Vue from 'vue'
import App from './App.vue'
import Penduduk from './views/Profile/Content/Penduduk/Penduduk.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { ClientTable } from 'vue-tables-2'

Vue.use(ClientTable)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({
  router,
  render: h => h(Penduduk)
}).$mount('.penduduk')
