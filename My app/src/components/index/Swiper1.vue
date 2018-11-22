<template>
  <div class="swiper swiper1">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="p in swiper1">
          <img :src="p" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
    export default {
        name: "Swiper1",
      props:["swiper1"],
      updated(){
        new Swiper('.swiper1',{
          autoplay:{
            delay:3000,
            disableOnInteraction:false
          },
          loop:true,
          speed:200,
        })
      }
    }
</script>

<style scoped>
  .swiper1{
    width: 100%;
    height: 1.105rem;
  }
  .swiper1 img{
    width: 3.75rem;
    height: 1.105rem;
  }
</style>
