<template>
    <header>
      <router-link to="/Hunt"><i class="iconfont icon-zuojiantou "></i></router-link>
      <span>图书畅销榜</span>
      <a href=""><i class="iconfont icon-fenxiang"></i></a>
    </header>
</template>

<script>
    export default {
        name: "RankHead"
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
