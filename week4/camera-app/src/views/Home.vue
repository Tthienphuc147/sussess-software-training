
<template>
  <div>
    <Camera v-on:takePicture="this.takePicture"></Camera>
    <Gallery />
  </div>
</template>

<script>
import Camera from "../components/Camera";
import Gallery from "../components/Gallery";
export default {
  name: "Home",
  components: {
    Camera,
    Gallery,
  },
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {
    takePicture() {
      let ratio = window.innerHeight < window.innerWidth ? 16 / 9 : 9 / 16;
      const picture = document.querySelector("canvas");
      picture.width = window.innerWidth < 1280 ? window.innerWidth : 1280;
      picture.height = window.innerHeight / ratio;
      const ctx = picture.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(
        document.querySelector("video"),
        0,
        0,
        picture.width,
        picture.height
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

