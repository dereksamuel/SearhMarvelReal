// Global librerias
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Local librarias
import App from './App.vue'
import router from './router'
import store from './store'

// CSS global Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Extensión de Vue.js
Vue.config.productionTip = false
Vue.use(BootstrapVue)

// Función especial de Vue
new Vue({
  router,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  store,
  render: h => h(App)
}).$mount('#app')
