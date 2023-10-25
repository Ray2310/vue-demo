<template>

  <!-- 类名·最好和当前组件名同名 -->
  <div v-loading="isLoading">
    <!--显示红色--> 
   <h2 v-color="color1">指令的值1测试</h2>
    <!--显示蓝色--> 
   <h2 v-color="color2">指令的值2测试</h2>
    <button @click="color1 = 'blue'">
       改变第一个h1的颜色
   </button>
   <template>
    <Mydialog v-slot:main></Mydialog>
   </template>
 </div>

</template>
<script>
  //导入组件
  import Mydialog from './components/Mydialog.vue'
  
  export default {
    data () {
      return {
        isLoading: true,
        color1: 'red',
        color2: 'blue'
      }
    },
    async created() { 
      // const res = await axios({
      //   url: 'http://hmajax.itheima.net/api/news',
      //   methods: 'get'
      // })
      setTimeout(()=>{
        this.isLoading = false
      },2000)
    },


    methods: {
     

    },

    // mounted (){
    //     let input = this.$refs.inp.focus()
    //     console.log("input"+ input)
    // },

    // 注册组件 (对于导入的组件名和名称一样时， 我们可以直接使用)
    components: {
      Mydialog,
      
    }
    ,
    
    directives: {
      loading: {
        inserted(el , binding){
          el.classList.add(binding.value)
        }
      },
      color: {
        inserted (el, binding) {
          // 可以对 el 标签，扩展额外功能
          //这个el 就相当于是document.querySelecter('color')的意思
          el.style.color = binding.value // 可以获取对应的data中的数据 就是我们指令的值color2 ----》 <h2 v-color="color1">指令的值1测试</h2>
          el.focus()

        },
        // update 指令的值修改的时候触发， 提供值变化后， dom的更新逻辑
        update (el , binding){
           console.log('update 指令的val')
           el.style.color = binding.value
        }
      }
    }
  }
</script>

<style>
  .loading:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url("./assets/loading.gif") no-repeat center;
}
</style>