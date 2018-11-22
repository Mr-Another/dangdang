<template>
    <div class="goods_msg">
      <p class="goods_name">
        <span>当当自营</span>
        小姨多鹤（典藏版）
      </p>
      <p class="goods_title">
        大时代里小人物的生存哲学与命运突围，意蕴丰盛迷人襟怀爽朗阔气的稀世之作
      </p>
      <p class="goods_price">
        <b>￥</b><span>37.50</span><em>（7.50折）</em><br/>
      </p>
      <p class="goods_price">
        <em>定价：</em><i>￥42.00</i>
      </p>
      <div class="goods_dis">
        <div class="g_left">
          <p>暂无评分</p>
          <p>
            <b>0人评分</b>
            精彩评论送积分
          </p>
        </div>
        <div class="g_right">
          <span>我要写评论</span>
        </div>
      </div>
      <ul class="goods_ul">
          <li class="goods_li"><a href="javascript:0;">
            <h1>作者<span>严歌苓</span></h1>

            <h1>查看作品
              <i class="iconfont icon-youjiantou"></i>
            </h1>
          </a></li>
        <li class="goods_li"><a href="javascript:0;">
          <h1>出版<span>作家出版社，2018年10月</span></h1>

          <h1>查看作品
            <i class="iconfont icon-youjiantou"></i>
          </h1>
        </a></li>
        <li class="goods_li"><a href="javascript:0;">
          <h1>排名<span>小说新书榜第233位</span></h1>

          <h1>查看榜单
            <i class="iconfont icon-youjiantou"></i>
          </h1>
        </a></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "GoodsInfo"
    }
</script>

<style scoped>
  .goods_msg{
    border-top: 1px solid #c1c1c1;
    padding-top: .15rem;
  }
  .goods_msg p{
    display: flex;
    align-items: center;
    padding: 0 .05rem;
    margin-bottom: .10rem;
  }
  .goods_name{
    font-size: .16rem;
  }
.goods_name span{
  height: .10rem;
  line-height: .10rem;
      font-size: .10rem;
  color: #fff;
  background: #ff4040;
  padding: .01rem .02rem;
}
  .goods_title{
    font-size: .11rem;
  }
  .goods_price{
    line-height: .25rem;
  }
  .goods_price b{
    font-size: .12rem;
    font-weight: normal;
    color: #ff4040;
  }
  .goods_price span{
      font-size: .18rem;
    color: #ff4040;
  }
  .goods_price em{
    font-size: .13rem;
    color: #c1c1c1;
    font-style: normal;
  }
  .goods_price i{
    font-size: .13rem;
    text-decoration: line-through;
    color: #c1c1c1;
    font-style: normal;
  }
  .goods_dis{
    display: flex;
    padding: 0 .10rem;
    justify-content: space-between;
    align-items: center;
  }
  .g_left p{
      font-size: .13rem;
    color: #ff4040;
  }
  .g_left p b{
    color: #c1c1c1;
    font-weight: normal;
  }
  .g_right{
    display: flex;
    height: .30rem;
  }
  .g_right span{
    display: flex;
      font-size: .13rem;
    color: #ff4040;
    padding: .01rem .10rem;
    border-radius: 10px;
    line-height: .20rem;
    align-items: center;
    background: rgba(254,157,133,.3);
  }
  .goods_ul{
    padding: 0 .10rem;
  }
  .goods_li{
    border-bottom: 1px solid #c1c1c1;
  }
  .goods_li a{
    display: flex;
    justify-content: space-between;
    color: #000;
  }
  .goods_li a h1{
    font-weight: 100;
    font-size: .14rem;
    line-height: .40rem;
    padding: 0 .05rem;
  }
  .goods_li a h1 span{
    padding-left: .30rem;
  }
</style>
