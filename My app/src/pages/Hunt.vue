<template>
    <div class="hunt_box">
      <hunt-head></hunt-head>
      <hunt-section :nav="info.nav" :book="info.book" :theme="info.theme"></hunt-section>
      <foot></foot>
    </div>
</template>

<script>
    import HuntInfo from "../apis/HuntInfo"
    import Foot from "../components/Foot";
    import HuntHead from "../components/Hunt/HuntHead";
    import HuntSection from "../components/Hunt/HuntSection";
    export default {
        name: "Hunt",
      data(){
        return {
            info:[]
        }
      },
      methods:{
        _initPageData(){
          HuntInfo.gethuntInfo(data=>{
            this.info=data
          })
        }
      },
      created(){
        this._initPageData()
      },
      components: {HuntSection, HuntHead, Foot}
    }
</script>

<style scoped>
.hunt_box{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #eaeff5;
}
</style>
