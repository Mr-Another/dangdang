<template>
    <header>
      <a href="javascript:0">
        <img src="static/img/u1.jpg" alt="">
      </a>
      <a href="javascript:0">推荐</a>
      <a href="javascript:0">领券</a>
      <a href="javascript:0">书单</a>
      <a href="javascript:0">书评</a>
      <a href="javascript:0">
        <i class="iconfont icon-iconfontarrows1"></i>
      </a>
    </header>
</template>

<script>
    export default {
        name: "FindHead"
    }
</script>

<style scoped>
header{
  display: flex;
  justify-content: space-around;
  font-size: .18rem;
  line-height: .50rem;
  height: .50rem;
  background: #fff;
}
header img{
  width: .31rem;
  height: .31rem;
}
header a{
  display: flex;
  align-items: center;
  color: #000;
}
header a:nth-child(2){
    font-size: .22rem;
  font-weight: bolder;
}
header a:last-child{
  font-weight: bolder;
}
</style>
