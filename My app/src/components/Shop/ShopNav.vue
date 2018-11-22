<template>
    <div class="shop_nav">
      <ul class="shop_nav_ul">
        <li class="shop_nav_li" v-for="p in navlist"><a href="javascript:0;">
          <img :src="p" alt="">
        </a></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ShopNav",
      props:["navlist"]
    }
</script>

<style scoped>
.shop_nav_ul{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
  .shop_nav_li{
    width: 22%;
    margin: 1%;
  }
.shop_nav_li img{
  width: 100%;
}

</style>
