// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('./assets/css/bootstrap.min.css')
require('./assets/css/custom.css')
require('./assets/css/google_fonts.css')
require('./assets/css/font-awesome.min.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
window.onload = function () {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  }).$mount('#app')
}
