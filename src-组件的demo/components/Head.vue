<template>
  <div class="hm-header">
    <!-- ·这里就直接调用我们使用的函数即可 -->
    <button @click="handAdd()"> + </button>
    <span>{{ count }}</span>
    <button @click="handSub()"> - </button>
    <br>
    <!-- 我是hm-header 
    <Button1>按钮</Button1> -->
  </div>
</template>

<script>
export default {
    props: {
      count: {
        type: Number,
      }
    },
    // 子传父 this.$emit('事件名',参数)
    methods: {
      handAdd(){
        this.$emit('changeCount', this.count + 1)
      },
      handSub(){
        this.$emit('changeCount', this.count - 1)
      }
    }
    
}
</script>

<style>
.hm-header {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  background-color: #8064a2;
  color: white;
}
</style>
