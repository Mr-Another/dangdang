<template>
    <div class="top_box">
      <div class="user_box">
        <div class="user_left">
          <a href="javascript:0;">
            <img src="static/img/u1.jpg" alt="">
            <p>
              <strong>登陆/注册
                <i class="iconfont icon-youjiantou"></i>
              </strong>
              <em>会员中心></em>
            </p>
          </a>
        </div>
        <div class="user_right">
          <div class="top_btn">
            <a href="javascript:0;">
              <i class="iconfont icon-shezhi"></i>
            </a>
            <a href="javascript:0;">
              <i class="iconfont icon-xiaoxi"></i>
              <span>2</span>
            </a>
          </div>
          <div class="bottom_btn">
            <span>签到领积分></span>
          </div>
        </div>
      </div>
      <div class="user_info">
        <a href="javascript:0;">
          <span>0</span><span>礼券</span>
        </a>
        <a href="javascript:0;">
          <span>0</span><span>积分</span>
        </a>
        <a href="javascript:0;">
          <span>0</span><span>礼品卡</span>
        </a>
        <a href="javascript:0;">
          <span>0</span><span>余额</span>
        </a>
      </div>
      <div class="user_hand">
        <a href="javascript:0;">
          <i class="iconfont icon-daifukuan"></i>
          <span>待付款</span></a>
        <a href="javascript:0;">
          <i class="iconfont icon-daishouhuo"></i>
          <span>待收货</span></a>
        <a href="javascript:0;">
          <i class="iconfont icon-daipingjia"></i>
          <span>待评价</span></a>
        <a href="javascript:0;">
          <i class="iconfont icon-shouhoutuikuan"></i>
          <span>退款/售后</span></a>
        <a href="javascript:0;">
          <i class="iconfont icon-quanbudingdan"></i>
          <span>全部订单</span></a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MineTop"
    }
</script>

<style scoped>
  .top_box{
    padding: 0 .15rem;
    height: 2.715rem;
    background:url("../../../static/img/bg1.jpg");
    background-size:3.75rem 2.715rem;
  }
  .user_box {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .user_left a{
    display: flex;
    align-items: center;
  }
  .user_left img{
    width: .31rem;
    height: .31rem;
    border-radius: 50%;
    margin-right: .10rem;
  }
  .user_left p{
    display: flex;
    flex-direction: column;
  }
  .user_left p strong{
    font-size: .20rem;
    color: #fff;
  }
  .user_left p em{
    font-size: .12rem;
    font-style: normal;
    background: rgba(0,0,0,.3);
    color:#fff;
    text-align: center;
    border-radius: 10px;
  }
  .user_right{
    display: flex;
    flex-direction: column;
  }
  .top_btn{
    display: flex;
    justify-content: space-around;
    line-height: .50rem;
    margin-bottom: .20rem;
  }
  .top_btn a{
    color: #fff;
    display: flex;
  }
  .top_btn a:nth-child(2){
    position: relative;
  }
  .top_btn a .iconfont{
    font-size: .20rem;
  }
  .top_btn a span{
    display: block;
    width: .15rem;
    height: .15rem;
    font-size: .12rem;
    border-radius: 50%;
    color: red;
    text-align: center;
    line-height: .15rem;
    background: #fff;
    position: absolute;
    top: 5px;
    right: -10px;
  }
  .bottom_btn{
    display: flex;
  }
  .bottom_btn span{
    font-size: .12rem;
    background: rgba(0,0,0,.3);
    color:#fff;
    text-align: center;
    border-radius: 10px;
    padding: 0 .10rem;
  }
  .user_info{
    overflow: hidden;
    margin-top: .20rem;
    margin-bottom: .14rem;
  }
  .user_info a{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    font-size: .18rem;
    color: #fff;
    float: left;
  }
  .user_hand{
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
  }
  .user_hand a{
    width: 20%;
    display: flex;
    flex-direction: column;
    float:left;
    padding: .20rem 0;
    justify-content: center;
    align-items: center;
  }
  .user_hand a span{
    font-size: .15rem;
    padding: .10rem 0;
    color: #000;
  }
  .user_hand a .iconfont{
    color: #ff4040;
    font-size: .22rem;
  }
</style>
