<!-- 新鲜好物 -->
<template>
 
    <!-- 新鲜好物 -->
    <div class="goods wrapper">
      <div class="title">
        <div class="left">
          <h3>新鲜好物</h3>
          <p>新鲜出炉 品质靠谱</p>
        </div>
        <div class="right">
          <a href="#" class="more"
            >查看全部<span class="iconfont icon-arrow-right-bold"></span
          ></a>
        </div>
      </div>
      <div class="bd">
        <ul>
        =
          <BaseGoodsItem v-for="item in 4" :key="item"></BaseGoodsItem>
          
        </ul>
      </div>
    </div>

</template>

<script>
  export default{ 

  }

</script>

<style>



/* 新鲜好物 */
.goods .bd ul {
  display: flex;
  justify-content: space-between;
}
.goods .bd li {
  width: 304px;
  height: 404px;
  background-color: #EEF9F4;
}
.goods .bd li {
  display: block;
}
.goods .bd li .pic {
  width: 304px;
  height: 304px;
}
.goods .bd li .txt {
  text-align: center;
}
.goods .bd li h4 {
  margin-top: 17px;
  margin-bottom: 8px;
  font-size: 20px;
}
.goods .bd li p {
  font-size: 18px;
  color: #AA2113;
}
.goods .bd li p span {
  font-size: 22px;
}


</style>