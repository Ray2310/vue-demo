<template>  
   <!-- 输入框 -->
  <header class="header">
    <h1>记事本</h1>
    <input placeholder="请输入任务" @keyup.enter="addItem()" v-model="name" class="new-todo" />
    <button class="add" @keyup.enter="addItem()" @click="addItem()">添加任务</button>
  </header>

</template>
<!-- 
  这里实现数据的 子传父
  完成添加功能
  1. 收集表单数据 v-model
  2. 监听时间 （回车+点击 都要进行添加）
  3. 子传父，将任务名称传递给父组件App.vue
  4. 父组件接受到数据后 进行添加 unshift(自己的数据自己负责)
 -->

<script>
  export default {
    data(){
    return {
      name:''
    }
  },
    methods: {
      addItem(){
        // console.log(this.name);
        //传递给父亲组件
        if(this.name === "" ) {
          return
        }
        this.$emit('addItem', this.name)
        //清空表单
        this.name = ''
      }
    }
    
  }

</script>

<style>



</style>