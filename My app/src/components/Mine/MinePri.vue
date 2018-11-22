<template>
    <div class="private">
      <h1>
        <a href="javascript:0;">{{take.name}}></a>
      </h1>
      <p class="state">{{take.title}}</p>
      <ul class="attent_ul">
        <li class="attent_li" v-for="p in take.book">
          <img :src="p.pic" alt="">
          <p>{{p.info}}</p>
          <a href="javascript:0;">开始阅读</a>
        </li>
      </ul>
      <h3>{{take.ending}}</h3>
    </div>
</template>

<script>
    export default {
        name: "MinePri",
      props:["take"]
    }
</script>

<style scoped>
.private{
  margin: 0 .15rem;
  background: #fff;
  border-radius: 10px;
  margin-top: .20rem;
  padding-bottom: .20rem;
}
.private a{
  display: flex;
  justify-content: center;
  font-size: .20rem;
  line-height: .50rem;
  color: #000;
}
.state{
  font-size: .12rem;
  text-align: center;
  line-height: .20rem;
  margin-bottom: .20rem;
}
  .attent_ul{
    display: flex;
    overflow-x: auto;
  }
  .attent_li{
    width: 24%;
    margin: 0 .6%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
.attent_li img{
  width: .60rem;
  height: .71rem;
}
  .attent_li p{
    width: 100%;
    height: .20rem;
    font-size: .14rem;
    line-height: .20rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: .05rem 0;
  }
.attent_li a{
  display: flex;
  line-height: .22rem;
  font-size: .12rem;
  padding: 0 .05rem;
  border-radius: 2px;
  color: #fff;
  background:#1cd8bf;
}
  .private h3{
    font-size: .12rem;
    color: #000;
    text-align: center;
    font-weight: 100;
    margin-top: .20rem;
  }
</style>
