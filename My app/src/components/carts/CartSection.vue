<template>
    <section>
        <product-list v-for="(p,idx) in products" :key="idx" :products="p"></product-list>
    </section>
</template>

<script>
    import ProductList from "./ProductList";
    export default {
        name: "CartSection",
      props:["products"],
      components: {ProductList}
    }
</script>

<style scoped>
section{
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
