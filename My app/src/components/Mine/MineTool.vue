<template>
    <div class="tool_box">
      <h1>
        <i class="iconfont icon-bi"></i>
        自定义工具&nbsp;>
      </h1>
      <div class="btn_box">
        <a href="javascript:0;" v-for="(p,idx) in tool">
          <i :class="'iconfont '+ p.pic" :style="fontColor(idx)"></i>
          <span>{{p.call}}</span>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MineTool",
      props:["tool"],
      computed:{
          fontColor(i){
            return function(i){
                return "color:"+this.tool[i].color
            }
          }
      }
    }
</script>

<style scoped>
.tool_box{
  margin: 0 .15rem;
  background: #fff;
  border-radius: 10px;
  margin-top: .20rem;
  padding-bottom: .20rem;
}
  .tool_box h1{
      font-size: .20rem;
    text-align: center;
    padding-top: .10rem;
  }
.tool_box h1 .iconfont{
  font-size: .20rem;
  color: #d71a2c;
  padding: 0 .05rem;
}
  .btn_box{
    display: flex;
    overflow-x: auto;
    margin-top: .20rem;
  }
.btn_box a{
  display: flex;
  flex-shrink: 0;
  width: 23%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .14rem;
}
.btn_box a span{
  color: #000;
  line-height: .20rem;
  padding: .15rem 0;
}
.btn_box a .iconfont{
  font-size: .22rem;
}
</style>
