<template>
  <div class="ad">
    <img src="static/img/logo1.jpg" alt="">
    <div class="swiper swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="p in swiper2">
            <span>{{p.title}}</span>
            {{p.name}}
        </div>
      </div>
    </div>
    <a class="ad_more" href="javascript:0;">更多</a>
  </div>
</template>

<script>
  import Swiper from 'swiper'
    export default {
        name: "Swiper2",
        props:["swiper2"],
      updated(){
        new Swiper('.swiper2',{
          direction: 'vertical',
          autoplay: {
            delay: 1500
          },
          speed: 500
        })
      }
    }
</script>

<style scoped>
  .ad{
    display: flex;
    justify-content: space-between;
    height: .45rem;
    background: #fff;
    margin-top: .08rem;
    overflow: hidden;
  }
  .ad img{
    width:1.055rem;
    height: .45rem;
  }
  .swiper2{
    width: 2.12rem;
    height: .45rem;
  }
  .swiper2 .swiper-slide{
    display: flex;
    align-items: center;
    height: .45rem;
    width: 100%;
    font-size: .11rem;
    color: #000;
  }
  .swiper2 .swiper-slide span{
    border: 1px solid #fb683c;
    border-radius: 3px;
    font-size: .11rem;
    color: #fb683c;
    height: .12rem;
    line-height: .12rem;
    padding: .01rem;
    margin:0 .05rem 0 .10rem;
  }
  .ad_more{
    display: flex;
    justify-content: center;
    align-items: center;
    width: .57rem;
    height: .45rem;
    font-size: .11rem;
    color: #e16160;
  }
</style>
