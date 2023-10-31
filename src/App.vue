<template>
  <div class="app-container">
    <!-- Header 区域 -->
    <cart-header></cart-header>

    <!-- 商品 Item 项组件 
      通过mapState得到数据， 然后进行v-for 渲染， 最后通过:item="item" 将对象传入
      上述就是父传子
    -->
    <cart-item v-for="(item, index) in list" :key="item.id" :item="item"></cart-item>

    <!-- Foote 区域 -->
    <cart-footer :list="list"></cart-footer>
  </div>
</template>

<script>
import CartHeader from '@/components/cart-header.vue'
import CartFooter from '@/components/cart-footer.vue'
import CartItem from '@/components/cart-item.vue'
import { mapActions , mapGetters, mapState, mapMutations} from 'vuex';
import cart from './store/modules/cart';

export default {
  name: 'App',
  components: {
    CartHeader,
    CartFooter,
    CartItem
  },
  computed: {
    ...mapState('cart', ['list'])
  },
  created() {
    // this.$store.dispatch('cart/getList')
    //通过this调用
    this.getList()
  },
  methods: {
    ...mapActions('cart',['getList'])
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding: 50px 0;
  font-size: 14px;
}
</style>
