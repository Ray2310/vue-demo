// const state= {

//  }
// const mutations = { }
// const actions = { }
// const getters = { }

import axios from "axios"
import { mapActions ,mapGetters, mapState, mapMutations } from "vuex"
// 导出
export default {
  namespaced: true,
  state() {
    return { 
      //关于购物车的一个数据[{ } ,{ }]
      list: []
    }
  },
  mutations: {
    //更新List中的数据
    updateList(state, newList){
      state.list = newList
    },
    add(state, id) { 
      const goods = state.list.find((item) => item.id == id)
      goods.count += 1
    },
    del(state, id) {
      const goods = state.list.find((item) => item.id == id)
      goods.count -= 1
     }
  },
  actions: {
    // 异步更新数据
    async getList(context){
      const res = await axios.get('http://localhost:3000/cart')
      // console.log(res.data)
      context.commit('updateList', res.data)
    },
    async addItem(context, item) { 
      const newCount = item.count + 1
      const res = await axios.patch(`http://localhost:3000/cart/${item.id}`, {
        count: newCount
      })
      console.log(res.data)
      context.commit('add', item.id)

    },
    async delItem(context, item) { 
      const newCount = item.count - 1
      if(newCount < 1) return
      const res = await axios.patch(`http://localhost:3000/cart/${item.id}`, {
        count: newCount
      })
      context.commit('del', item.id)
    }
  },
  getters: {
    totalCount(state)  {
      return state.list.reduce((sum,item ) => sum + item.count, 0);

    },
    totalMoney(state)  {
      return state.list.reduce((sum,item ) => sum += item.price*item.count, 0);

    }
  }
}