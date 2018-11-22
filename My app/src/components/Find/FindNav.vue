<template>
    <div class="fnav_box">
      <a href="javascript:0;">
        <img src="static/img/p2.jpg" alt="">
        <span>图书五折</span>
      </a>
      <a href="javascript:0;">
        <img src="static/img/p1.jpg" alt="">
        <span>限时一元</span>
      </a>
      <a href="javascript:0;">
        <img src="static/img/p3.jpg" alt="">
        <span>冬装特惠</span>
      </a>
      <a href="javascript:0;">
        <img src="static/img/p4.jpg" alt="">
        <span>限时抢购</span>
      </a>
    </div>
</template>

<script>
    export default {
        name: "FindNav"
    }
</script>

<style scoped>
.fnav_box{
  background-color: #fff;
  display: flex;
}
.fnav_box a{
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: .12rem;
  color: #515151;
  line-height: .50rem;
  align-items: center;
}
.fnav_box img{
  width: .42rem;
  height: .42rem;
}
</style>
