<template>
    <footer>
      <div class="f_left">
        <router-link to="/Shop" href="javascript:0;"><i class="iconfont icon-dianpu"></i><span>店铺</span></router-link>
        <a href="javascript:0;"><i class="iconfont icon-xin"></i><span>收藏</span></a>
        <a href="javascript:0;"><i class="iconfont icon-gouwuche"></i><span>加入购物车</span></a>
      </div>
      <div class="f_right">
        <a href="javascript:0;">立即购买</a>
        <a href="javascript:0;">加入购物车</a>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "GoodsFoot"
    }
</script>

<style scoped>
  footer{
    display: flex;
    font-size:.16rem;
    height: .50rem;
  }
  footer a{
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
  }
  .f_left{
    display: flex;
    width: 40%;
  }
  .f_left .iconfont{
    font-size: .18rem;
  }
  .f_left a{
    flex-direction: column;
    color: #000;
  }
  .f_left a span{
    font-size: .10rem;
  }
  .f_right{
    display: flex;
    width: 60%;
  }
  .f_right a{
    color: #fff;
  }
  .f_right a:nth-of-type(1){
    background-color: #ffbe23;
  }
  .f_right a:nth-of-type(2){
    background-color: #f3554b;
  }
</style>
