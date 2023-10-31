<template>

  <!-- 类名·最好和当前组件名同名 -->
  <div class="App">
    <h1>根组件</h1>
    <input type="text" :value="ount" @input="setOunt"> <span>值为{{ +$store.state.ount }}</span>
    <Son1></Son1>
    <hr>
    <Son2></Son2>
    <button @click="setAfter()" >1s 后修改为 666</button>

      <!-- <router-view></router-view> -->
  </div>

</template>
<script>
  //导入组件
  import Son1 from '@/components/Son1'
  import Son2 from '@/components/Son2'
  import { mapState } from 'vuex'
  mapState(['ount'])

  export default {

    // 注册组件 (对于导入的组件名和名称一样时， 我们可以直接使用)
    components: {
      Son1, 
      Son2
    },
    computed: {
      ...mapState(['ount']) //相当于一个方法， 然后方法的作用是 return this.$store.state.count
    },
    created(){
      console.log(this.$store)
    },
    methods: {
      setOunt(e){
        //必须要进行转换， 不然出来的就是String类型的数据
        // 1. 实时获取输入框的值
        const val =  +e.target.value
         // 2. 提交mutation，调用mutation函数
        this.$store.commit('changeCount', val)
      },

      setAfter(){
        const val = 666
        this.$store.dispatch('change', val)
      } 
    }
  }
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>