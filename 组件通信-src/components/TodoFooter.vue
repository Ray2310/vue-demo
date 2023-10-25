<template>
    
  <!-- 统计和清空 -->
  <footer class="footer">
    <!-- 统计 -->
    <span class="todo-count">合 计:<strong> {{totalCount}} </strong></span>
    <!-- 清空 -->
    <button class="clear-completed" @click="clear()">
      清空任务
    </button>
  </footer>

</template>
<!-- 
  数据持久化存储
思路分析：
  底部合计：父组件传递list到底部组件 —>展示合计
  清空功能：监听事件 —> 子组件通知父组件 —>父组件清空
  持久化存储：watch监听数据变化，持久化到本地

 -->

<script>
  export default {
    props: {
      list: Array
    },
    methods: {
      clear() {
        this.$emit('clear', [])

      }
    },
    computed: {
      totalCount (){
        return this.list.length
      }
  },
  }
  

</script>
<style>

</style>