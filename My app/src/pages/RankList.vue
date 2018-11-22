<template>
  <div class="rank">
    <rank-head></rank-head>
    <rank-nav></rank-nav>
    <rank-product-list :info="info"></rank-product-list>
  </div>
</template>

<script>
    import  RankList from "../apis/RankInfo"
    import RankHead from "../components/Rank/RankHead";
    import RankNav from "../components/Rank/RankNav";
    import RankProductList from "../components/Rank/RankProductList";
    export default {
        name: "RankList",
      data(){
        return {
          info:[]
        }
      },
      methods:{
        _initPageData(){
          RankList.getRankInfo(data=>{
            this.info=data
          })
        }
      },
      created(){
        this._initPageData()
      },
      components: {RankProductList, RankNav, RankHead}
    }
</script>

<style scoped>
.rank{
  display: flex;
  flex-direction: column;
  background: #fff;
}
</style>
