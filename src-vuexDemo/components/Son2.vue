<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值: {{$store.state.ount }} <label></label>
    <br />
    <button @click="sub()">值 - 10</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
mapState(['ount'])

export default {
  name: 'Son2Com',
  computed: {
    ...mapState(['ount'])
  },
  methods: {
    sub() {
      this.$store.commit('SubCount', 10)  
    }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>