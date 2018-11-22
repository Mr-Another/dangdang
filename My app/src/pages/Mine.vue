<template>
    <div class="mine_box">
      <mine-section :info="info"></mine-section>
      <foot></foot>
    </div>
</template>

<script>
    import MineInfo from "../apis/MineInfo"
    import Foot from "../components/Foot";
    import MineSection from "../components/Mine/MineSection";
    export default {
        name: "Mine",
      data(){
        return {
          info:[]
        }
      },
      methods:{
        _initPageData(){
          MineInfo.getMineInfo(data=>{
            this.info=data
          })
        }
      },
      created(){
        this._initPageData()
      },
      components: {MineSection, Foot}
    }
</script>

<style scoped>
.mine_box{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #eaeff5;
}
</style>
