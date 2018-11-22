<template>
  <div class="shop_box">
    <shop-head></shop-head>
    <div class="s_box">
    <a href="javascript:0;">
      <img src="static/img/logo3.jpg" alt="">
    </a>
  </div>
    <shop-search></shop-search>
    <shop-section :info="info"></shop-section>
  </div>
</template>

<script>
    import ShopInfo from "../apis/ShopInfo"
    import ShopHead from "../components/Shop/ShopHead";
    import ShopSearch from "../components/Shop/ShopSearch";
    import ShopSection from "../components/Shop/ShopSection";
    export default {
        name: "Shop",
      data(){
        return {
          info:[]
        }
      },
      methods:{
        _initPageData(){
          ShopInfo.getShopInfo(data=>{
            this.info=data
          })
        }
      },
      created(){
        this._initPageData()
      },
      components: {ShopSection, ShopSearch, ShopHead}
    }
</script>

<style scoped>
  .shop_box{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .s_box img{
    width: 3.75rem;
    height: 1.64rem;
  }
</style>
