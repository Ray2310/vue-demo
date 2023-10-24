<template>
<!-- 列表区域 -->
  <section class="main">
    <ul class="todo-list">
      <li class="todo"  v-for="(item, index) in list" :key="item.id" >
        <div class="view" >
          <span class="index">{{ index + 1 }}</span> <label>{{ item.name }}</label>
          <button class="destroy" @click="deleteItem(item.id)" ></button>
        </div>
      </li>
    </ul>
  </section>
</template>
<!-- 
删除任务
思路分析：
  1. 监听时间（监听删除的点击）携带id
  2. 子传父，将删除的id传递给父组件App.vue
  3. 进行删除 filter (自己的数据自己负责)


 -->

<script>
  export default {
    // 使用对象的写法 ,接收父组件中传入的内容
      props: {
        list: Array
      },
      methods: {
        deleteItem(id){
          this.$emit('deleteItem', id)
        }

      }
  }

</script>

<style></style>