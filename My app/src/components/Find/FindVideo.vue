<template>
    <div class="video_box">
      <video controls width="100%" height="100%">
        <source src="static/video/v01.mp4" type="video/mp4">
      </video>
      <h1>这五本书恨不得通宵读完</h1>
    </div>
</template>

<script>
    export default {
        name: "FindVideo"
    }
</script>

<style scoped>
  .video_box{
    height: 1.90rem;
    margin: 4%;
    position: relative;
  }
  .video_box video{
    border-radius: .10rem;
  }
  .video_box h1{
    font-size: .18rem;
    color: #fff;
    position: absolute;
    top: 0;
    padding: .10rem 0 0 .10rem;
  }
</style>
