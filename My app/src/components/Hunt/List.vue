<template>
    <div class="list">
      <h1>榜单</h1>
      <ul class="list_ul">
        <li class="list_li" v-for="p in book"><a href="javascript:0">
          <img :src="p.pic" alt="">
          <span>{{p.name}}</span>
        </a></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "List",
      props:["book"]
    }
</script>

<style scoped>
  .list{
    display: flex;
    flex-direction: column;
    margin-bottom: .10rem;
    background: #fff;
    flex-shrink: 0;
  }
  .list h1{
    padding-top: .04rem;
    padding-left: .07rem;
    line-height: .14rem;
    font-size: .15rem;
  }
  .list_ul{
    display: flex;
    padding-bottom: .15rem;
    padding-top: .10rem;
    overflow-x: auto;
  }
  .list_li{
    padding: 0 .15rem;
  }
  .list_li a{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .list_li img{
    width: .68rem;
  }
  .list_li span{
    font-size: .11rem;
    color: #000;
  }
</style>
