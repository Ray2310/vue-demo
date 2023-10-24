<template>

  <!-- 类名·最好和当前组件名同名 -->
  <div class="App">
      <!-- @changeCount 作用是监听这个事件， ：count是动态传递参数 -->
    <Head @changeCount="handChange" :count="count"></Head>
    <!-- <UserInfo></UserInfo> -->
    <Main></Main>
    <Foot>这里是Foot</Foot>
  </div>

</template>
<script>
  //导入组件
  import Head from "./components/Head.vue"
  import Main from './components/Main.vue'
  import Foot from './components/Foot.vue'
  import UserInfo from "./components/UserInfo.vue"
  export default {

    data (){
      return {
        count: 100
      }
    },
    methods: {
      handChange(newCount) {
        console.log(newCount)
        this.count = newCount
      }
    },


    // 注册组件 (对于导入的组件名和名称一样时， 我们可以直接使用)
    components: {
      Head,
      Main,
      Foot,
      UserInfo
    }
  }
</script>

<style>
  .App {
    width: 600px;
    height: 700px;
    background-color: #87ceeb;
    margin: 0 auto;
    padding: 20px;
  }

</style>