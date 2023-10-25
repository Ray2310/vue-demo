import Vue from 'vue'
//进行全局组件的导入
import App from './App.vue'


//全局注册组件


// //全局注册指令
// Vue.directive('focus', {
//   //inserted 会在指令所在的元素被插入到页面触发
//     inserted(el) {
//       console.log(el)
//     }
// })

//是否显示当前生产模式
Vue.config.productionTip = false



// 创建当前vue对象
new Vue({
  // render: h => h(App),
  render: (createElement) => {
    return createElement(App)
  }
}).$mount('#app')
