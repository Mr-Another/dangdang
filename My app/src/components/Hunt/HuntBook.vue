<template>
    <div class="book_box">
        <h2>
          <a href="javascript:0;">{{theme[0][0]}} ></a>
          <router-link to="/RankList">畅销榜 ></router-link>
        </h2>
      <ul class="rank">
        <li class="rank_li" v-for="p in data1">
          <a href="javascript:0;">
            {{p}}
          </a>
        </li>
        <li class="rank_li" v-for="i in data2" v-show="flag">
          <a href="javascript:0;">
            {{i}}
          </a>
        </li>
        <li class="rank_li">
          <a href="javascript:0;" @click="isShow">
            {{msg}}
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "HuntBook",
      props: ["theme"],
      data(){
        return {
          flag:false,
          data1:[],
          data2:[],
          msg:'展开'
        }
      },
      methods: {
            _isHide() {
              let arr1=[]
              let arr2=[]
            for(let u=0;u<this.theme[1].length;u++){
              if(u>4){
                arr2.push(this.theme[1][u])
              }else{
                arr1.push(this.theme[1][u])
              }
            }
            this.data1=arr1
              this.data2=arr2
          },
          isShow(){
              if(this.flag==false){
                this.flag=true
                this.msg='收起'
              }else{
                this.flag=false
                this.msg='展开'
              }
          }
      },
      created(){
        this._isHide()
      }
    }
</script>

<style scoped>
  .book_box{
    padding:.10rem;
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-bottom: .10rem;
    flex-shrink: 0;
  }
  .book_box h2,.book_box h2 a{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .book_box h2 a:nth-child(1){
    font-size: .15rem;
    color: #000;
  }
  .book_box h2 a:nth-child(2){
    font-size: .12rem;
    color: #8f8f8f;
  }
  .rank{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .rank_li{
    width: 33.33%;
    height: .50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #a0a0a0;
  }
  .rank_li a{
    display: block;
    text-align: center;
    width: 100%;
    height: .15rem;
    border-right: 1px solid #a0a0a0;
    font-size: .12rem;
    line-height: .15rem;
    color: #777777;
  }
  .rank_li:nth-child(3),.rank_li:nth-child(2),.rank_li:nth-child(1){
    border: none;
  }
  .rank_li:nth-child(3n) a{
    border: none;
  }
</style>
