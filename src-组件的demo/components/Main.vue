<template>
  <div class="hm-main">
    <!-- 传递到子标签UserInfo.vue中 -->
    <!-- 通过动态添加自定义属性的的方式传递属性 -->
      <UserInfo
      :username="username"
      :age="age"
      :isSingle="isSingle"
      :car="car"
      :hobby="hobby"
      ></UserInfo>
     
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue'

export default {
 data() {
    return {
      username: '小帅',
      age: 28,
      isSingle: true,
      car: {
        brand: '宝马',
      },
      hobby: ['篮球', '足球', '羽毛球'],
    }
  },
  components: {
    UserInfo
  }

}
</script>

<style>
.hm-main {
  height: 400px;
  width: 400px;
  background-color: pink;
}
</style>
