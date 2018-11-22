<template>
    <div class="ssearch">
      <div class="search_left">
        <img src="static/img/logo4.jpg" alt="">
      </div>
      <div class="search_content">
      <div class="bj">
        <input type="text" placeholder="本店搜索">
      </div>
        <div class="btn"><i class="iconfont icon-sousuo"></i></div>
      </div>
      <div class="search_right">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ShopSearch"
    }
</script>

<style scoped>
  .ssearch{
    display: flex;
    justify-content: space-around;
    margin-top: .20rem;
    border-bottom: 1px solid #c1c1c1;
    padding-bottom: .05rem;
  }
  .search_left img{
    width: .96rem;
    height: .30rem;
  }
  .search_content{
    height: .30rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bj{
    display: flex;
    height: .30rem;
    align-items: center;
    background-color: #e4e4e6;
    border-top-left-radius: .15rem;
    border-bottom-left-radius: .15rem;
    padding-left: .15rem;
  }
  .search_content .iconfont{
    font-size: .15rem;
  }
  .search_content input{
    height: .22rem;
    border: 0;
    outline: none;
    background-color: #e4e4e6;
  }
  .btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: .35rem;
    height: .30rem;
    font-size: .16rem;
    background-color: #fe445c;
    color: #fff;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  .search_right{
    display: flex;
    flex-direction: column;
    font-size: .14rem;
    justify-content: center;
    align-items: center;
  }
  .search_right .iconfont{
    font-size: .20rem;
  }
</style>
