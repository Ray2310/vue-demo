import Vue from 'vue'
//进行全局注册
import App from './App.vue'

//是否显示当前生产模式
Vue.config.productionTip = false

// 创建当前vue对象
new Vue({
  // render: h => h(App),
  render: (createElement) => {
    return createElement(App)
  }
}).$mount('#app')
