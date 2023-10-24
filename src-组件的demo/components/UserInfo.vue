<template>
  <div class="userinfo">
    <h3>我是个人信息组件</h3>
    <div>姓名：{{ username }}</div>
    <div>年龄：{{ age }}</div>
    <div>是否单身：{{ isSingle===true ? '是' : '否' }}</div>
    <div>座驾： {{ car.brand}}</div>
    <div>兴趣爱好：{{ hobby }}</div>
  </div>
</template>

<script>
export default {
  //在父标签 Main.vue 中
  // 通过props属性， 来接受父结构中传递过来的属性
  props: {
    'username': String,
    'age': Number,
    'isSingle': Boolean,
    'car': Object,
    'hobby': Array
  },
  //通过使用上面的类型校验， 来代替我们之前写的校验过程 
  // props: ['username', 'age', 'isSingle', 'car', 'hobby']
  
}
</script>

<style>
.userinfo {
  width: 300px;
  height: 300px;
  border: 3px solid #000;
  padding: 20px;
}
.userinfo > div {
  margin: 20px 10px;
}
</style>