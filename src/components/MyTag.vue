<template>
  <div class="my-tag">
    <input 
      v-if="isEdit"
      refs="inp"
      v-focus
      :value="value"
      class="input"
      type="text"
      placeholder="输入标签"
      @blur="isEdit = false"
      @keyup.enter="handleEnter"
    />
    <!-- 
       :value="values"绑定
       v-focus 自动聚焦的方法二 ： 在main.js中封装全局指令
      @blur="isEdit = false" 失去焦点隐藏 -->
    <div class="text" v-else
      @dblclick="handleClick">{{ value }}</div>
  </div>

</template>
<!-- 
  (1) 双击显示输入框，输入框获取焦点
  (2) 失去焦点，隐藏输入框
  (3) 回显标签信息
      信息是由外部父组件传入的
  (4) 内容修改，回车 → 修改标签信息
 -->
<script>
  export default {
     //接受父组件传入的信息
    props: {
      value: String
    },
    data() { 
      return { 
        isEdit: false
      }
    },
   

    methods: {
      // 使用双击点击事件
      handleClick(){ 
        // 需要实现自动聚焦的方式一： ，通过this.$nextTick()
        // this.$nextTick(()=> {
        //   //立刻获取焦点
        //   this.$refs.inp.focus()
        // })
        this.isEdit = true
      },
      //e :可以获取触发事件的事件源
      handleEnter(e) {
        if(e.target.value.trim() === '') return alert("标签内容不为空")
        //获取回车之后里面的内容， 所以获取内容， 然后更新给父组件
        this.$emit('input', e.target.value)
        this.isEdit=  false //隐藏输入框

      }
    }
  }

</script>


<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}



</style>