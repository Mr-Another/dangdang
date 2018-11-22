<template>
  <div class="sale">
    <div class="sale_title">
      <a href="#">
        <img src="static/img/logo2.jpg" alt="">
      </a>
      <a href="#" class="time">
        <span>0</span>
        <span>0</span>
        &nbsp;时&nbsp;
        <span>0</span>
        <span>0</span>
        &nbsp;分&nbsp;
        <span>0</span>
        <span>0</span>
        &nbsp;秒
      </a>
    </div>
    <ul class="sale_ul">
      <li class="sale_li" v-for="(p,idx) in goods1">
        <a href="#">
          <img :src="p.pic" alt="">
          <p class="goods_name">
            {{p.name}}
          </p>
          <p class="goods_price">
            <span>{{shown(idx)}}</span>
            <span>{{showo(idx)}}</span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Sale",
      props:["goods1"],
      computed:{
          shown(i){
            return function(i){
              if(this.goods1[i].name==''){
                return ''
              }else{
                return `￥${this.goods1[i].now}`
              }
            }
          },
        showo(i){
          return function(i){
            if(this.goods1[i].name==''){
              return ''
            }else{
              return `￥${this.goods1[i].old}`
            }
          }
        }
      }
    }
</script>

<style scoped>
  .sale{
    margin-top: .08rem;
    background: #fff;
    margin-bottom: .08rem;
  }
  .sale_title{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .sale_title img{
    width: 1.47rem;
    height: .4rem;
  }
  .time{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: .25rem;
    font-size: .11rem;
    color: #000;
  }
  .time span{
    line-height: .26rem;
    padding: 0 .05rem;
    background-color: #000;
    color: #fff;
  }
  .sale_ul{
    margin-top: .08rem;
    display: -webkit-flex;
    overflow-x: auto;
    padding-bottom: .05rem;
  }
  .sale_li{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: .96rem;
    padding: 0 .08rem;
  }
  .sale_li img{
    width: .96rem;
    height: .96rem;
  }
  .goods_name{
    height: .30rem;
    overflow: hidden;
    font-size: .10rem;
    line-height: .15rem;
    color: #000;
  }
  .goods_price{
    display: flex;
    flex-direction: column;
  }
  .goods_price span:nth-child(1){
    font-size: .11rem;
    font-weight: bolder;
    color: #f13d5a;
  }
  .goods_price span:nth-child(2){
    font-size: .08rem;
    color: #878787;
    text-decoration: line-through;
  }
</style>
