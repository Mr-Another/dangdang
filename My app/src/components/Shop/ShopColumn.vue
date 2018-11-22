<template>
    <div class="colunm_box">
      <div class="col_top">
        <em></em>
        <p>{{books.title}}</p>
        <a href="javascript:0">
          更多
          <span>></span>
        </a>
      </div>
      <ul class="col_ul">
        <li class="col_li" v-for="(u,idx) in books.book"><a href="javascript:0;">
          <img :src="u.pic" alt="">
          <p class="book_name">
            {{u.name}}
          </p>
          <p class="pro_way">
            <span v-show="u.isSs">当当自营</span><span v-show="u.flas">限时抢</span>
          </p>
          <span class="book_price">{{delData(idx)}}</span>
        </a></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "ShopColumn",
      props:["books"],
      computed:{
          delData(i){
            return function(i){
              return `￥${this.books.book[i].price}`
            }
          }
      }
    }
</script>

<style scoped>
  .colunm_box{
    margin-top: .10rem;
    padding-bottom: .05rem;
  }
  .col_top{
    position: relative;
    display: flex;
    margin: 0 .05rem;
    justify-content: center;
    align-items: center;
    margin-bottom: .10rem;
  }
  .col_top em{
    display: block;
    width: 80%;
    border-top: 1px solid #c1c1c1;
    position: absolute;
    top: 50%;
    left: 5%;
  }
  .col_top p{
    background: #ededed;
    padding: 0 .05rem;
    z-index: 1;
    font-size: .14rem;
  }
  .col_top a{
    font-size: .12rem;
    color: #c1c1c1;
    position: absolute;
    right: 1%;
    top: 10%;
  }
  .col_top a span{
    font-size: .12rem;
    background: #c1c1c1;
    color: #fff;
    border-radius: 50%;
    padding: .01rem .03rem;
  }
  .pro_way span{
    font-size: .10rem;
  }
  .pro_way span:nth-of-type(1){
    color: #ff4040;
    background-color: #fff;
    border: 1px solid #ff4040;
    padding: 1px 2px;
    margin-right: .08rem;
  }
  .pro_way span:nth-of-type(2){
    color: #fff;
    background:#ff4040;
    border: 1px solid #ff4040;
    padding: 1px 2px;
  }
  .col_ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .col_li{
    display: flex;
    width: 32%;
    margin: .05%;
  }
  .col_li img{
    width: 1.15rem;
    height: 1.15rem;
  }
  .col_li p{
    display: flex;
    flex-wrap: wrap;
  }
  .book_name{
    width: 100%;
    color: #000;
    font-size: .16rem;
    line-height: .20rem;
    margin: .05rem 0;
    height:.40rem;
    overflow: hidden;
  }
  .book_price{
    display: flex;
    font-size: .18rem;
    color: #ff4040;
    margin: .05rem 0;
  }
</style>
