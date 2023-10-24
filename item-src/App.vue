<template>
  <div class="App">

    <!-- 快捷链接 -->
    <XtxShortCut>快捷链接</XtxShortCut>


    <!-- 顶部导航 -->
    <XtxHeaderNav>顶部导航</XtxHeaderNav>
    
    
    
    <!-- 轮播区域 -->
    <XtxBanner>轮播区域</XtxBanner>
    
    
    <!-- 新鲜好物 -->
    <XtxNewGoods>新鲜好物</XtxNewGoods>
    
    
    <!-- 热门品牌 -->
    <XtxHotBrand>热门品牌</XtxHotBrand>
    
    
    
    <!-- 最新专题 -->
    <XtxTopic>最新专题</XtxTopic>
    
    
    <!-- 版权底部 -->
    <XtxFooter></XtxFooter>
    


  </div>
</template>


<script>
  import XtxShortCut from './components/XtxShortCut.vue' 
  import XtxHeaderNav from './components/XtxHeaderNav.vue'
  import XtxBanner from './components/XtxBanner.vue'
  import XtxNewGoods from './components/XtxNewGoods.vue'
  import XtxHotBrand from './components/XtxHotBrand.vue'
  import XtxTopic from './components/XtxTopic.vue'
  import XtxFooter from './components/XtxFooter.vue'


  export default{
    components: {
      XtxShortCut,
      XtxHeaderNav,
      XtxBanner,
      XtxNewGoods,
      XtxHotBrand,
      XtxTopic,
      XtxFooter
    }

  }
</script>


<style>



</style>