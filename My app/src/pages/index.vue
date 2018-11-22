<template>
    <div class="big_box">
      <index-head :nav="info.nav"></index-head>
      <index-section :list="info.list" :goods1="info.goods1" :goods2="info.goods2" :goods3="info.goods3" :swiper1="info.swiper1" :swiper2="info.swiper2" :swiper3="info.swiper3" ></index-section>
      <foot></foot>
    </div>
</template>

<script>
    import GoodsInfoApis from "../apis/GoodsInfoApis"
    import IndexHead from "../components/index/IndexHead";
    import IndexSection from "../components/index/IndexSection";
    import Foot from "../components/Foot";
    import Public from "../assets/css/public.css";
    export default {
        name: "index",
      data(){
          return {
              info:[]
          }
      },
      methods:{
        _initPageData(){
          GoodsInfoApis.getIndexInfo(data=>{
            this.info=data
          })
        }
      },
      created(){
          this._initPageData()
      },
      components: {IndexSection, IndexHead,IndexSection,Foot,Public}
    }
</script>

<style scoped>
  .big_box{
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    background-color: #eaeff5;
  }
</style>
