<template>

  <!-- 类名·最好和当前组件名同名 -->
  <div class="App">

    <Head>这里是Head</Head>
    <Main>这里是main</Main>
    <Foot>这里是Foot</Foot>
  </div>

</template>
<script>
  //导入组件
  import Head from "./components/Head.vue"
  import Main from './components/Main.vue'
  import Foot from './components/Foot.vue'
  export default {

    // 注册组件 (对于导入的组件名和名称一样时， 我们可以直接使用)
    components: {
      Head,
      Main,
      Foot
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