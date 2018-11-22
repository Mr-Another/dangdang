<template>
    <div class="right_box">
      <a class="btn" href="javascript:0;">
        <img src="static/img/hunt_logo.jpg" alt="">
      </a>
      <div class="entrance">
        <div class="en_sub">
          <p>
            进入当当书城<br>
            <span>低至1.9折</span>
          </p>
          <i class="iconfont icon-youjiantou"></i>
        </div>
        <div class="en_sub">
          <p>
            进入童书馆<br>
            <span>精选儿童读物</span>
          </p>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
      <list :book="book"></list>
      <hunt-book v-for="(p,idx) in theme" :theme="p" :key="idx"></hunt-book>
    </div>
</template>

<script>
    import List from "./List";
    import HuntBook from "./HuntBook";
    export default {
        name: "HuntRight",
      props:["book","theme"],
      components: {HuntBook, List}
    }
</script>

<style scoped>
  .right_box{
    display: flex;
    width: 78%;
    overflow-y: auto;
    overflow-x: hidden;
    flex-direction: column;
  }
  .btn img{
    width: 100%;
    height: 1.02rem;
    margin-bottom: .10rem;
  }
  .entrance{
    display: flex;
    justify-content: space-between;
    margin-bottom: .10rem;
    flex-shrink: 0;
  }
  .en_sub{
    display: flex;
    justify-content: center;
    width: 49%;
    height: .57rem;
    background: #fff;
    font-size: .03rem;
    align-items: center;
  }
  .en_sub p{
    font-size: .15rem;
    padding-right: .10rem;
  }
  .en_sub span{
    font-size: .10rem;
    color: #9e9e9e;
  }

</style>
