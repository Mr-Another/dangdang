<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <a href="#">
          <img src="static/img/y1.jpg" alt="">
        </a>
      </div>
      <div class="swiper-slide">
        <a href="#">
          <img src="static/img/y2.jpg" alt="">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "GoodsSwiper",
      mounted(){
          new Swiper(".swiper",{
            autoplay: {
              delay: 3000
            },
            speed: 500,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets'
            }
          })
      }
    }
</script>

<style scoped>
.swiper{
  width: 3.75rem;
  height: 3.75rem;
  position: relative;
}
  .swiper img{
    width: 100%;
    height: 100%;
  }
  .swiper-pagination{
    position: absolute;
    bottom: 0;
  }
</style>
