<template>
    <header>
      <div class="hd_top">
        <a href="">
          <i class="iconfont icon-caidan"></i>
        </a>
        <a href="javascript:0;">
          <p>
            <i class="iconfont icon-sousuo"></i>
            搜索商品/品牌/种类
          </p>
          <i class="iconfont icon-richscan_icon"></i>
        </a>
        <a href="">
          <i class="iconfont icon-xiaoxi"></i>
        </a>
      </div>
      <div class="hd_bottom">
        <div class="hd_bot_left">
          <a href="javascript:0;" v-for="p in nav">{{p}}</a>
        </div>
        <div class="hd_bot_right">
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
        name: "IndexHead",
        props:["nav"]
    }
</script>

<style scoped>
  header{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: .875rem;
    background-color: #fff;
  }
  .hd_top{
    display:flex;
    justify-content: space-around;
    align-items: center;
    height: .45rem;
  }
  .hd_top a{
    display:flex;
    height: .31rem;
    color: #767f88;
    line-height: .31rem;
  }
  .hd_top a .iconfont{
    font-size: .20rem;
  }

  .hd_top a:nth-child(2){
    justify-content: space-between;
    width: 2.715rem;
    padding: 0 .125rem;
    border-radius: .125rem;
    background-color: #f2f3f5;
    font-size: .11rem;
  }
  .hd_top a:nth-child(2) p .iconfont{
    margin-right: .10rem;
  }
  .hd_top a:nth-child(2) .iconfont{
    font-size:.18rem;
  }
  .hd_bottom{
    display: flex;
    justify-content: space-between;
    height: .425rem;
    font-size: .13rem;
  }
  .hd_bot_left{
    display: flex;
    align-items: center;
    overflow-x: auto;
    width: 90%;
  }
  .hd_bot_left a{
    height: .18rem;
    flex-shrink: 0;
    line-height: .18rem;
    color: #303030;
    padding: 0 .10rem;
  }
  .hd_bot_right{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    color: #303030;
  }

</style>
