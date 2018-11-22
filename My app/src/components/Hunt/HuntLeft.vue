<template>
    <div class="left_box">
      <a href="javascript:0;" v-for="p in nav">{{p}}</a>
    </div>
</template>

<script>
    export default {
        name: "HuntLeft",
      props:["nav"]
    }
</script>

<style scoped>
  .left_box{
    display: flex;
    width: 20%;
    overflow: auto;
    flex-direction: column;
  }
  .left_box a{
    text-align: center;
    line-height: .50rem;
    font-size: .12rem;
    color: #000;
    background: #fff;
    border-bottom: 1px solid #f8f8f8;
  }
</style>
