<template>
    <header>
      <div class="hd_hide">
        <a href="#">编辑</a>
        <a href="#">
          <i class="iconfont icon-xiaoxi"></i>
        </a>
      </div>
      <div>购物车</div>
      <div>
        <a href="#">编辑</a>
        <a href="#">
          <i class="iconfont icon-xiaoxi"></i>
        </a>
      </div>
    </header>
</template>

<script>
    export default {
        name: "CartHead"
    }
</script>

<style scoped>
  header{
    display: flex;
    font-size: .18rem;
    line-height: .50rem;
    justify-content: space-between;
    height: .50rem;
    border-bottom: 1px solid #eaeaea;
    background-color: #fff;
    padding: 0 .10rem;
  }
  header a{
    font-size: .14rem;
    color: #000;
  }
  header a .iconfont{
    font-size: .18rem;
    padding-left: .20rem;
  }
  .hd_hide{
    visibility: hidden;
  }
</style>
