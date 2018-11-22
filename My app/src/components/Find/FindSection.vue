<template>
    <section>
      <find-nav></find-nav>
      <find-list v-for="(p,idx) in info.BookList" :book="p" :key="idx"></find-list>
      <find-video v-for="(u,i) in info.BookVideo" :video="u" :key="i+'-l'" ></find-video>
    </section>
</template>

<script>
    import FindNav from "./FindNav";
    import FindList from "./FindList";
    import FindVideo from "./FindVideo";
    export default {
        name: "FindSection",
      props:["info"],
      components: {FindVideo, FindList, FindNav}
    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
