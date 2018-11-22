<template>
  <div class="sort">
    <div class="sort_title">
      <div class="sort_title_top">
        <img src="static/img/t1.jpg" alt="">
        <p class="sort_refe">
          <a href="#">
            当当书城&nbsp;
            <span><i class="iconfont icon-youjiantou"></i></span>
          </a>
          <a href="#">电子书&nbsp;
            <span><i class="iconfont icon-youjiantou"></i></span></a>
          <a href="#">网络文学&nbsp;
            <span><i class="iconfont icon-youjiantou"></i></span></a>
        </p>
      </div>
      <a class="sort_ad" href="#">
        <img src="static/img/k1.jpg" alt="">
      </a>
    </div>
    <ul class="sort_ul">
      <li class="sort_li" v-for="p in goods2"><a href="#">
        <b>{{p.name}}</b>
        <span>
          {{p.discount}}
        </span>
        <img :src="p.pic" alt="">
      </a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Sort",
      props:["goods2"]
    }
</script>

<style scoped>
  .sort{
    background-color: #fff;
    margin-top: .08rem;
  }
  .sort_title_top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: .69rem;
    width: 100%;
  }
  .sort_title_top img{
    width: 2.165rem;
    height: .40rem;
  }
  .sort_refe{
    display: flex;
  }
  .sort_refe a{
    display: flex;
    font-size: .11rem;
    color: #000;
    margin: 0 .08rem;
  }
  .sort_refe a span{
    display: flex;
    background: #000;
    border-radius: 50%;
  }
  .sort_refe a .iconfont{
    font-size: .05rem;
    padding: .02rem;
    color: #fff;
  }
  .sort_ad img{
    width: 3.75rem;
    height: 1.00rem;
  }
  .sort_ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #f7f6f4;
  }
  .sort_li{
    background-color: #fff;
    padding: .05rem 0;
    width: 33%;
    float: left;
    margin-bottom: 1px;
  }
  .sort_li a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .sort_li a b{
    font-size: .14rem;
    line-height: .20rem;
    color: #000;
  }
  .sort_li a span{
    font-size: .11rem;
    line-height: .20rem;
    color: #db2f3b;
  }
  .sort_li a img{
    width: 1.00rem;
    height: 1.00rem;
  }
</style>
