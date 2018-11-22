<template>
    <section>
      <swiper1 :swiper1="swiper1"></swiper1>
      <a class="title_img" href="javascript:0;">
        <img src="static/img/9.jpg" alt="">
      </a>
      <nav-list :list="list"></nav-list>
      <swiper2 :swiper2="swiper2"></swiper2>
      <swiper3 :swiper3="swiper3"></swiper3>
      <sale :goods1="goods1"></sale>
      <a href="#" class="acti">
        <img src="static/img/a1.jpg" alt="">
      </a>
      <sort :goods2="goods2"></sort>
      <cap :goods3="goods3"></cap>
    </section>
</template>

<script>
    import Swiper1 from "./Swiper1";
    import NavList from "./NavList";
    import Swiper2 from "./Swiper2";
    import Swiper3 from "./Swiper3";
    import Sale from "./Sale";
    import Sort from "./Sort";
    import Cap from "./Cap";
    export default {
        name: "IndexSection",
      props:["list","goods1","goods2","goods3","swiper1","swiper2","swiper3"],
      components: {Cap, Sort, Sale, Swiper3, Swiper2, NavList, Swiper1}
    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow-y:auto;
    overflow-x: hidden;
  }
  .title_img img{
    width: 3.75rem;
    height: 1.58rem;
  }
  .acti img{
    width: 3.75rem;
    height: 1.00rem;
  }
</style>
