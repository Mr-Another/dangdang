<template>
    <div class="goods_box">
      <goods-head></goods-head>
      <goods-section></goods-section>
      <goods-foot></goods-foot>
    </div>
</template>

<script>
    import GoodsHead from "../components/Goods/GoodsHead";
    import GoodsFoot from "../components/Goods/GoodsFoot";
    import GoodsSection from "../components/Goods/GoodsSection";
    export default {
        name: "Goods",
      components: {GoodsSection, GoodsFoot, GoodsHead}
    }
</script>

<style scoped>
.goods_box{
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>
