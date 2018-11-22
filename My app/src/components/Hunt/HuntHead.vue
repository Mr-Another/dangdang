<template>
    <header>
      <a href="">
        <i class="iconfont icon-caidan"></i>
      </a>
      <a href="javascript:0;">
        <p>
          <i class="iconfont icon-sousuo"></i>
          搜索商品/品牌/种类
        </p>
        <i class="iconfont icon-huatong"></i>
      </a>
      <a href="">
        <i class="iconfont icon-xiaoxi"></i>
      </a>
    </header>
</template>

<script>
    export default {
        name: "HuntHead"
    }
</script>

<style scoped>
  header{
    display:flex;
    justify-content: space-around;
    align-items: center;
    height: .45rem;
    background-color: #fff;
  }
  header a{
    display:flex;
    height: .31rem;
    color: #767f88;
    line-height: .31rem;
  }
  header a .iconfont{
    font-size: .20rem;
  }

  header a:nth-child(2){
    justify-content: space-between;
    width: 2.715rem;
    padding: 0 .125rem;
    border-radius: .125rem;
    background-color: #f2f3f5;
    font-size: .11rem;
  }
  header a:nth-child(2) p .iconfont{
    margin-right: .10rem;
  }
  header a:nth-child(2) .iconfont{
    font-size:.18rem;
  }
</style>
