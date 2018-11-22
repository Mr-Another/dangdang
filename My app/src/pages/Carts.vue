<template>
  <div class="cart_box">
    <cart-head></cart-head>
    <cart-section :products="info"></cart-section>
    <foot></foot>
  </div>
</template>

<script>
    import CartsInfo from "../apis/CartsInfo"
    import CartHead from "../components/carts/CartHead";
    import Foot from "../components/Foot";
    import CartSection from "../components/carts/CartSection";
    export default {
        name: "Carts",
      data(){
          return {
            info:[]
          }
      },
      methods:{
        _initPageData(){
          CartsInfo.getCartsInfo(data=>{
            this.info=data
          })
        }
      },
      created(){
        this._initPageData()
      },
      components: {CartSection, Foot, CartHead}
    }
</script>

<style scoped>
.cart_box{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #eaeff5;
}
</style>
