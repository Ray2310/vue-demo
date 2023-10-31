// 公共数据存放
// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
//导入模块
import user  from './modules/user'
import settings from './modules/settings'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化 
Vue.use(Vuex)

// 创建仓库 store
const store = new Vuex.Store({

  //挂载模块
  modules: {
    user,
    settings
  },
  state: {
    ount: 100
  },
  mutations: {
    addCount(state, count) {
      state.ount += count
    },
    SubCount( state, count){
      state.ount -= count
    },
    changeCount(state, count){ 
      state.ount = count
    } 
  },
  actions: {
    // 最好不要自己直接修改,
    change(context, count) {
      setTimeout(() => {
        //调用山寺规模的changeCount， 从而修改
        context.commit('changeCount', count)
      },2000)
    },
    addFive(context, count) {
      setTimeout(() => {
        //在这里通过上下文来调用mutations中的方法
        context.commit('addCount', count)
      },2000)
    }
  }
})

// 导出仓库
export default store