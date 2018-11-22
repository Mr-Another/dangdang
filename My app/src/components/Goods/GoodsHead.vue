<template>
    <header>
      <a href="javascript:0;"><i class="iconfont icon-zuojiantou"></i></a>
      <div class="goods_info">
        <a href="javascript:0;">商品</a>
        <a href="javascript:0;">详情</a>
        <a href="javascript:0;">评论</a>
        <a href="javascript:0;">推荐</a>
      </div>
      <a href="javascript:0;"><i class="iconfont icon-gengduo"></i></a>
    </header>
</template>

<script>
    export default {
        name: "GoodsHead"
    }
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  font-size: .20rem;
  line-height: .50rem;
  padding: 0 .10rem;
}
header a{
  color: #000;
}
  .goods_info a{
    padding: 0 .05rem;
  }
</style>
