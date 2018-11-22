<template>
  <div class="cap">
    <p class="cap_title">
      <i class="iconfont icon-xin"></i>
      根据您的偏好猜您可能喜欢
    </p>
    <ul class="cap_ul">
      <li class="cap_li" v-for="p in like">
        <a href="#">
          <img :src="p.pic" alt="">
          <p class="cap_name">
            {{p.name}}
          </p>
          <p class="cap_state">
            <span v-show="p.isSs">当当自营</span>
            <span v-show="p.pinkage">包邮</span>
          </p>
          <strong>{{p.price}}</strong>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "MineWant",
    props:["like"]
  }
</script>

<style scoped>
  .cap{
    margin-top: .08rem;
  }
  .cap_title{
    font-size: .18rem;
    text-align: center;
    font-weight: 700;
  }
  .cap_title .iconfont{
    padding: .05rem;
    color: #f43e77;
  }
  .cap_ul{
    margin-top: .10rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .cap_li{
    background-color: #fff;
    width: 49.8%;
    overflow: hidden;
    margin-bottom: 1px;
    padding: 5px 0;
  }
  .cap_li img{
    width: 100%;
  }
  .cap_li a{
    display: flex;
    flex-direction: column;
  }
  .cap_name{
    height: .30rem;
    font-size: .12rem;
    line-height: .15rem;
    overflow: hidden;
    padding: 0 5px;
    color: #000;
  }
  .cap_state{
    display: -webkit-flex;
    padding: 2px 5px;
  }
  .cap_state span{
    font-size: .05rem;
    line-height: .06rem;
    padding: 3px 2px;
    margin: 1px;
    color: #f2303c;
    border: 1px solid #f2303c;
    border-radius: 2px;
  }
  .cap strong{
    font-size: .12rem;
    padding: 0 5px;
    color: #f2303c;
  }
</style>
