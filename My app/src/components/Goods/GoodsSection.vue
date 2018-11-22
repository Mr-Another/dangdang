<template>
    <section>
      <goods-swiper></goods-swiper>
      <goods-info></goods-info>
    </section>
</template>

<script>
    import GoodsSwiper from "./GoodsSwiper";
    import GoodsInfo from "./GoodsInfo";
    export default {
        name: "GoodsSection",
      components: {GoodsInfo, GoodsSwiper}
    }
</script>

<style scoped>
section{
  flex: 1;
  overflow-y:auto;
  overflow-x: hidden;
}
</style>
