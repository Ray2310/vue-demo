<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: {{ ount }} <label></label>
    <br>
    <button @click="addFive(5)"> 2s 后 值+5 </button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex';
mapState(['ount'])

export default {
  name: 'Son1Com',
  computed: {
    ...mapState(['ount']),
   
  },
  methods: { 
    add(){
      this.$store.commit('addCount')
    },
    ...mapActions(['addFive'])
  }

}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>