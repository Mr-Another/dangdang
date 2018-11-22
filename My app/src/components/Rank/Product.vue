<template>
    <div class="rank_product"><router-link to="/Goods">
      <div class="pro_left">
        <img :src="product.pic" alt="">
      </div>
      <div class="pro_right">
        <p class="pro_name">{{product.name}}</p>
        <p class="pro_author">作者：{{product.author}}</p>
        <p class="pro_press">{{product.house}}</p>
        <p class="pro_way">
          <span v-show="product.isSs">当当自营</span><span v-show="product.flas">限时抢</span>
        </p>
        <p class="pro_price">
          <b>{{priNow}}</b><b>{{priOld}}</b>
        </p>
        <p class="pro_eva">
          <i class="lineHeight iconfont icon-start" v-for="u in goodData"></i>
          <i class="lowHeight iconfont icon-start" v-for="t in betData"></i>
        </p>
      </div>
      <span class="ranking">{{product.id}}</span>
    </router-link></div>
</template>

<script>
    export default {
      name: "Product",
      props: ["product"],
      data(){
        return {
          goodData:[],
          betData:[]
        }
      },
      computed: {
        priNow() {
          return `￥${this.product.now}`
        },
        priOld() {
          return `￥${this.product.old}`
        }
      },
      methods:{
        _comData(){
          let arr1=[]
          let arr2=[]
          for(let i=0;i<this.product.favorable;i++){
                arr1.push(i)
          }
          for(let j=0;j<5-arr1.length;j++){
              arr2.push(j)
          }
          this.goodData=arr1
          this.betData=arr2
        }
      },
      created(){
        this._comData()
      }
    }
</script>

<style scoped>
.rank_product{
  position: relative;
  border-bottom: 1px solid #c1c1c1;
}
.ranking{
  display: block;
  width: .20rem;
  height: .20rem;
  font-size: .14rem;
  line-height: .20rem;
  text-align: center;
  background: #ff4040;
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
.rank_product a{
  display: flex;
  align-items: center;
}
  .pro_left img{
    width: 1.22rem;
    height: 1.22rem;
    padding: .15rem .10rem;
  }
.pro_right p{
  display: flex;
  align-items: center;
  margin-bottom: .06rem;
}
.pro_right{
  padding-right:.10rem;
}
  .pro_name{
    font-size: .15rem;
    line-height: .20rem;
    color: #000;
  }
  .pro_author,.pro_press{
    font-size: .12rem;
    color: #c1c1c1;
  }
  .pro_way span{
    font-size: .12rem;
  }
.pro_way span:nth-of-type(1){
  color: #ff4040;
  border: 1px solid #ff4040;
  padding: 1px 3px;
  margin-right: .08rem;
}
.pro_way span:nth-of-type(2){
  color: #fff;
  background:#ff4040;
  padding: 2px 4px;
}
  .pro_price b:nth-of-type(1){
    font-size: .14rem;
    color: #ff4040;
    margin-right: .08rem;
  }
.pro_price b:nth-of-type(2){
  font-size: .12rem;
  color: #c1c1c1;
  text-decoration: line-through;
}
  .pro_eva .iconfont{
      font-size: .18rem;
  }
  .lineHeight{
    color: #ff4040;
  }
  .lowHeight{
    color: #cdcdcd;
  }
</style>
