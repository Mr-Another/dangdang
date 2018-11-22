<template>
  <footer>
    <router-link to="/">
      <i class="iconfont icon-shouye_huaban_huaban"></i>
      <span>首页</span>
    </router-link>

    <router-link to="/Hunt">
      <i class="iconfont icon-fenlei1"></i>
      <span>分类</span>
    </router-link>

    <router-link to="/Find">
      <i class="iconfont icon-im_faxian"></i>
      <span>发现</span>
    </router-link>

    <router-link to="/Carts">
      <i class="iconfont icon-daohanggouwuche"></i>
      <span>购物车</span>
      <span class="count">9</span>
    </router-link>

    <router-link to="/Mine">
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </router-link>

  </footer>
</template>

<script>
    export default {
        name: "Foot"
    }
</script>

<style scoped>
  footer{
    display: flex;
    height: .5rem;
    background-color: #fff;
    border-top: 1px solid #d4d4d4;
  }
  footer a{
    display: flex;
    width: 20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #49494b;
    position: relative;
  }
  .count{
    color: #fff;
    border-radius: 50%;
    background: #fc5f56;
    position: absolute;
    top: 5px;
    right: 10px;
    line-height: .15rem;
    text-indent: .05rem;
    letter-spacing: .05rem;
  }
  footer a .iconfont{
    font-size: .20rem;
    margin-bottom: .05rem;
  }
  footer a span{
    font-size: .10rem;
  }
</style>
