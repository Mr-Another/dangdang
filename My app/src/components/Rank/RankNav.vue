<template>
    <div class="rank_nav">
      <a href="javascript:0;" @click="fontColor" v-for="p in nav">{{p}}</a>
    </div>
</template>

<script>
    export default {
        name: "RankNav",
      data(){
          return {
            nav:["新书热卖榜","图书畅销榜","童书新书榜","童书畅销榜","五星图书榜","图书飙升榜"]
          }
      },
      computed:{
        _getColor(){
          return
        }
      },
      methods:{
          fontColor(){
            return this._getColor()
          }
      }
    }
</script>

<style scoped>
  .rank_nav{
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    height: .50rem;
  }
  .rank_nav a{
    flex-shrink: 0;
    font-size: .18rem;
    line-height: .50rem;
    padding: 0 .10rem;
    color: #000;
    border-bottom: 1px solid #c1c1c1;
  }
</style>
