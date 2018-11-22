<template>
    <div class="flist_box">
      <div class="list_title">
        <h2>{{book.title}}</h2>
        <span>{{book.count}}</span>
      </div>
        <p class="list_name">{{book.intro}}</p>
      <ul class="list_ul">
        <li class="list_li" v-for="p in book.pic"><a href="javascript:0;">
          <img :src="p" alt="">
        </a></li>
      </ul>
      <div class="list_book">
        <a class="list_btn" href="javascript:0;">书单></a>
        <div class="lb_right">
          <a href="javascript:0;">
            <i class="iconfont icon-xin"></i>
            <span>{{book.like}}</span>
          </a>
          <a href="javascript:0;">
            <i class="iconfont icon-xiazai16"></i>
            <span>{{book.comment}}</span>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FindList",
      props:["book"]
    }
</script>

<style scoped>
  .flist_box{
    background-color: #fff;
    margin:5% 4%;
    border-radius: .10rem;
    padding:.10rem .15rem;
  }
  .list_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list_title h2{
    width: 80%;
    height: .50rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    font-size: .18rem;
    line-height: .50rem;
  }
  .list_title span{
    font-size: .10rem;
    color: #f19eb2;
    border: 1px solid #f19eb2;
    padding: .01rem .05rem;
  }
  .list_name{
    height: .44rem;
    overflow: hidden;
    font-size: .14rem;
    line-height:.22rem;
    color: #696969;
  }
  .list_ul{
    display: flex;
    overflow-x: auto;
  }
  .list_li{
    width: 23%;
    margin: 1%;
    flex-shrink: 0;
  }
  .list_li img{
    width: 98%;
    height: .80rem;
  }
  .list_book{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: .15rem;
  }
  .list_btn{
    display: block;
    font-size: .15rem;
    border: 1px solid #565656;
    color: #565656;
    padding: .01rem .03rem;
    border-radius: 2px;
  }
  .lb_right{
    display: flex;
  }
  .lb_right a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #adadad;
    padding: 0 .10rem;
  }
  .lb_right span{
    font-size: .14rem;
  }
  .lb_right .iconfont {
    font-size: .18rem;
  }
</style>
