<template>
  <div class="brand">
    <img class="brand_title" src="static/img/l1.jpg" alt=""><div class="swiper swiper3">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="p in swiper3">{{p}}</div>
    </div>
  </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
    export default {
        name: "Swiper3",
        props:["swiper3"],
      updated(){
        new Swiper('.swiper3',{
          autoplay:{
            delay:2000,
            disableOnInteraction:false
          },
          loop:true,
          speed:200,
        })
      }
    }
</script>

<style scoped>
  .brand{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: .08rem;
    background-color: #fff;
  }
  .brand_title{
    width: 1.34rem;
    height: .4rem;
  }
  .swiper3{
    width: 3.75rem;
    height: 1.93rem;
    text-align: center;
  }
</style>
