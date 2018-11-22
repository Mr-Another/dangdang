<template>
    <div class="find_box">
      <find-head></find-head>
      <find-section :info="info"></find-section>
      <foot></foot>
    </div>
</template>

<script>
    import Foot from "../components/Foot";
    import FindHead from "../components/Find/FindHead";
    import FindSection from "../components/Find/FindSection";
    import FindInfo from "../apis/FindInfo";
    export default {
        name: "Find",
      data(){
        return {
          info:[]
        }
      },
      methods:{
        _initPageData(){
          FindInfo.getFindInfo(data=>{
            this.info=data
          })
        }
      },
      created(){
        this._initPageData()
      },
      components: {FindSection, FindHead, Foot}
    }
</script>

<style scoped>
.find_box{
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #eaeff5;
}
</style>
