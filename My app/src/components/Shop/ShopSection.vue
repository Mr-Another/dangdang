<template>
    <section>
        <shop-nav :navlist="info.nav"></shop-nav>
      <shop-column v-for="(p,idx) in info.category" :books="p" :key="idx"></shop-column>
    </section>
</template>

<script>
    import ShopNav from "./ShopNav";
    import ShopColumn from "./ShopColumn";
    export default {
        name: "ShopSection",
      props:["info"],
      components: {ShopColumn, ShopNav}
    }
</script>

<style scoped>
section{
  background: #ededed;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
