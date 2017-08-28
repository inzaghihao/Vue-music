import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

import 'common/stylus/index.styl'

Vue.prototype.$ajax = axios;

Vue.config.productionTip = false


fastclick.attach(document.body)

Vue.use(VueLazyLoad,{
	loading:require("./common/image/default.png")
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
