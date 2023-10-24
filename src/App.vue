<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @addItem="add"></TodoHeader>
    <!-- 通过在这里写list， 就可以实现在子组件中作接收 -->
    <TodoMain @deleteItem="deleteItem" :list="list"></TodoMain>
    <TodoFooter @clear="clear" :list="list"></TodoFooter>

  </section>
</template>

<script>
// 导入组件
  import TodoHeader from './components/TodoHeader.vue'
  import TodoMain from './components/TodoMain.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default {  
    // 注册组件
    components: {
      TodoHeader, 
      TodoMain,
      TodoFooter    
    },
  
  //TODO: 数据提供需要提供在父组件中， 这样如果我们想要使用， 直接使用props传递即可。 
  data () {
    return {
      list: [
        {id: 1, name: 'eat'},
        {id: 2, name: 'play'},
        {id: 3, name: 'write'}
      ]

    }
  },
  methods: {
    add(newName){
      console.log(newName)
      //使用unshift添加
      this.list.unshift({
        id: +new Date(), //通过时间戳来实现id的唯一性
        name: newName
      })
      //还需要作的是清空表单
    },
    deleteItem(id) {
      console.log(id)
      //通过filter过滤器实现删除操作
      this.list = this.list.filter(item => item.id !== id) 
    },
    //清空任务栏
    clear(){
      this.list = []
    }
  }



}
</script>
<!-- 
  TODO:
  拆分基础组件
  渲染待办任务
  添加任务
  删除任务
  底部合计 和 清空功能
  持久化存储

 -->
<style>

</style>
