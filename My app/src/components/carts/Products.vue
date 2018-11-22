<template>
  <li class="product_li">
    <input type="checkbox" :class="isCheck" :checked="info.checked" @click="dis">
    <a class="pro_img" href="javascript:0;">
      <img :src="info.pic" alt="">
    </a>
    <div class="mess">
      <p class="p1">
        {{info.name}}
      </p>
      <p class="p2">
        <span>￥{{info.now}}</span>
        <span>￥{{info.old}}</span>
      </p>
      <p class="p3">
        <a @click="del">－</a>
        <span>{{info.qal}}</span>
        <a @click="add">＋</a>
      </p>
    </div>
  </li>
</template>

<script>
  export default {
    name: "Products",
    props:["info","id"],
    data(){
      return {
        isCheck:"uncheck"
      }
    },
    methods:{
      del(){
        this.$emit('del',this.id)
      },
      add(){
        this.$emit('add',this.id)
      },
      dis(){
        this.$emit('dis',this.id)
      }
    },
    beforeUpdate(){
      if(this.info.checked){
        this.isCheck="check"
      }else{
        this.isCheck="uncheck"
      }
    }
  }
</script>

<style scoped>
  .product_li{
    display: flex;
    align-items: center;
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
    height: 1.05rem;
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
