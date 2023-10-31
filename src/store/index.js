import Vue from 'vue'
import Vuex from 'vuex'

//1. 导入模块
import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      cart
  }
})
