<template>
    <header>
      <a href=""><i class="iconfont icon-zuojiantou"></i></a>
      <span>当当自出版品牌旗舰店</span>
      <a href=""><i class="iconfont icon-gengduo"></i></a>
    </header>
</template>

<script>
    export default {
        name: "ShopHead"
    }
</script>

<style scoped>
  header{
    display: flex;
    height: .50rem;
    justify-content: space-between;
    font-size: .20rem;
    line-height: .50rem;
    border-bottom: 1px solid #c1c1c1;
  }
  header a{
    display: flex;
    justify-content: center;
    width: .60rem;
    height: .50rem;
    font-size: .22rem;
  }
</style>
