<template>

  <!-- 类名·最好和当前组件名同名 -->
  <div class="App">

    这里是head头部
    <Head>test</Head>
  </div>

</template>
<script>
  import Head from "./components/Head.vue";
  export default {
    // 注册组件
    components: {
      Head: Head
    }
  }


</script>

<style>
  .App {
    width: 200px;
    height: 200px;
    background-color: blue;
    /* margin: 0 auto; */
  }

</style>