<template>
  <div class="product_box">
    <div class="protuct_top">
      <div class="pt_left">
        <input :class="namea" :checked="isCheck" type="checkbox" @click="all">
        <a href="javascript:0">{{products.tep}}</a>
      </div>
      <div class="pt_right">
        <span v-show="products.pinkage">已免运费</span>
        <a href="javascript:0;">编辑</a>
      </div>
    </div>
    <ul class="pl">
      <products v-for="(u,idx) in products.value" :key="idx" :info="u" :id="idx" @del="del" @add="add" @dis="dis"></products>
    </ul>
  </div>
</template>

<script>
  import Products from "./Products";
  export default {
    name: "ProductList",
    components: {Products},
    props:["products"],
    data(){
      return {
        allcheck:false,
        isCheck:false,
        namea:'unchecked_btn',
        arr:[]
      }
    },
    methods:{
      all(){
        let length=this.products.value.length
        if(this.isCheck){
          this.isCheck=false
          this.namea='unchecked_btn'
          for(let i=0;i<length;i++){
            this.products.value[i].checked=false
          }
        }else{
          this.isCheck=true
          this.namea='checked_btn'
          for(let i=0;i<length;i++){
            this.products.value[i].checked=true
          }
        }
      },
      del(i){
        if(this.products.value[i].qal<=1){
          this.products.value[i].qal=1
          return
        }
        this.products.value[i].qal--
      },
      add(i){
        this.products.value[i].qal++
      },
      dis(i){
        if(this.products.value[i].checked){
          this.products.value[i].checked=false
        }else{
          this.products.value[i].checked=true
        }
      },
      fn(){
        console.log('468514685')
      }
    }
  }
</script>

<style scoped>
  .product_box{
    background-color: #fff;
    padding: 0 .10rem;
  }
  .pl{
    background: #fff;
    padding:.15rem 0;
  }
  .protuct_top input{
    display: block;
    width: .40rem;
    height: .36rem;
    appearance:none;
    outline: none;
    margin-right: .30rem;
  }
  .protuct_top{
    display: flex;
    justify-content: space-between;
    height: .36rem;
    font-size: .18rem;
    line-height: .36rem;
    margin-top: .10rem;
    border-bottom: 1px solid #eaeaea;
  }
  .pt_left{
    display: flex;
    align-items: center;
  }
  .pt_left a{
    color: #000;
  }
  .pt_right{
    font-size: .12rem;
    color: #898989;
  }
  .pt_right a{
    padding-left: .15rem;
    font-size: .15rem;
    color: #898989;
  }
  .checked_btn{
    background:url("../../assets/img/b1.png") no-repeat center;
    background-size: .25rem .25rem;
  }
  .unchecked_btn{
    background:url("../../assets/img/b2.png") no-repeat center;
    background-size: .25rem .25rem;
  }
  .product_li{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: .05rem;
    padding: .10rem 0;
  }
  .product_li input {
    display: block;
    width: .40rem;
    height: .36rem;
    appearance: none;
    outline: none;
    margin-right: .10rem;
  }
  .pro_img{
    padding-right: .10rem;
  }
  .pro_img img{
    width: 1.05rem;
    heihgt: 1.05rem;
  }
  .mess{
    flex: 1;
    height: 1.05rem;
    font-size: .14rem;
  }
  .p1{
    line-height: .16rem;
    height: .32rem;
    overflow: hidden;
    margin-bottom: .15rem;
  }
  .p2 span{
    font-size: .12rem;
  }
  .p2 span:nth-child(1){
    color: #ff4040;
  }
  .p2 span:nth-child(2){
    color: #bcbcbc;
    text-decoration: line-through;
  }
  .p3{
    display: flex;
    justify-content: center;
    font-size: .14rem;
    padding-top: .13rem;
  }
  .p3 a{
    display: block;
    text-align: center;
    width: .20rem;
    height: .20rem;
    font-size: .18rem;
    line-height: .20rem;
    border-radius: 50%;
    background-color: #eaeaea;
    color: #8e8e8e;
  }
  .p3 span{
    padding: 0 .08rem;
  }
  .uncheck{
    background:url("../../assets/img/b2.png") no-repeat center;
    background-size: .25rem .25rem;
  }
  .check{
    background:url("../../assets/img/b1.png") no-repeat center;
    background-size: .25rem .25rem;
  }

</style>
