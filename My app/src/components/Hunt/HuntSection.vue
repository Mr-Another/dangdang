<template>
    <section>
      <hunt-left :nav="nav"></hunt-left>
      <hunt-right :book="book" :theme="theme"></hunt-right>
    </section>
</template>

<script>
    import HuntLeft from "./HuntLeft";
    import HuntRight from "./HuntRight";
    export default {
        name: "HuntSection",
      components: {HuntRight, HuntLeft},
      props:["nav","book","theme"]
    }
</script>

<style scoped>
section{
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
</style>
