import Vue from 'vue'
//进行全局组件的导入
import App from './App.vue'
import Button1 from './components/Button1.vue'
//全局注册组件
Vue.component('Button1', Button1)

//是否显示当前生产模式
Vue.config.productionTip = false



// 创建当前vue对象
new Vue({
  // render: h => h(App),
  render: (createElement) => {
    return createElement(App)
  }
}).$mount('#app')
