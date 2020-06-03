import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import router from './router'
import store from './store'
import './styles/styles.scss'

// Importing styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
