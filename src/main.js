import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router //简写可以省略一个
}).$mount('#app')
