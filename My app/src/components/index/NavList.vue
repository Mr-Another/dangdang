<template>
  <ul class="nav_ul">
    <li class="nav_li" v-for="p in list">
      <a href="javascript:0;">
        <img :src="p.pic" alt="">
        <span>{{p.name}}</span>
      </a>
      <a href="javascript:0;">
        <img :src="p.pic1" alt="">
        <span>{{p.name1}}</span>
      </a>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "NavList",
      props:["list"]
    }
</script>

<style scoped>
  .nav_ul{
    display: flex;
    height: 1.5rem;
    background: #FFF;
  }
  .nav_li{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
  }
  .nav_li a{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: .12rem;
    color: #000;
    line-height: .32rem;
  }
  .nav_li img{
    width: .33rem;
    height: .33rem;
    margin-top: .10rem;
  }
</style>
