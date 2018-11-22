<template>
    <section>
      <mine-top></mine-top>
      <mine-pri v-for="(p,idx) in info.MineInfo" :key="idx" :take="p"></mine-pri>
      <mine-tool :tool="info.Tool"></mine-tool>
      <mine-want :like="info.MineWant"></mine-want>
    </section>
</template>

<script>
    import MineTop from "./MineTop";
    import MinePri from "./MinePri";
    import MineTool from "./MineTool";
    import MineWant from "./MineWant";
    export default {
        name: "MineSection",
      props:["info"],
      // data(){
      //     return {
      //       msg:[]
      //     }
      // },
      // methods:{
      //     _delData(){
      //       this.msg=this.info
      //       console.log(this.info)
      //     }
      // },
      // mounted(){
      //     this._delData()
      // },
      components: {MineWant, MineTool, MinePri, MineTop}
    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
