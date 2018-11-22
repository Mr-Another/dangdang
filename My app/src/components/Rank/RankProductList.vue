<template>
    <div class="rank_product_list">
        <product v-for="(p,idx) in info" :key="idx" :product="p"></product>
    </div>
</template>

<script>
    import Product from "./Product";
    export default {
        name: "RankProductList",
      props:["info"],
      components: {Product}
    }
</script>

<style scoped>
.rank_product_list{
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: .20rem;
}
</style>
