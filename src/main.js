import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import ecored from 'ecored-pkg-fliz'

import config from './config/global.js'
const packageJson = require('../package.json')

Vue.use(ecored, { config, packageJson })

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import './styles/_styles.sass'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
