
<template>
  <div>
    <div class="fluid-container">
      <div class="camera">
        <Gallery class="gallery" />
        <div class="snap-area">
          <div class="btn btn-sm snap" v-on:click="$emit('takePicture')"></div>
        </div>
        <video autoplay class="feed"></video>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from "../components/Gallery";
export default {
  name: "Camera",
  created() {},
  components: {
    Gallery,
  },
  data() {
    return {};
  },
  props: {},
  methods: {
    init() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      } else {
        alert("Cannot get Media Devices");
      }
    },
  },
  beforeMount() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.camera {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .feed {
    display: block;
    width: 100%;
    background-color: #000;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
  .snap-area {
    padding: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0;
    background-color: rgb(255, 255, 255);
    position: absolute;
    bottom: 30px;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    .snap {
      padding: 5px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 0;
      background-color: #dcd9d9;
      color: #fff;
      outline: none;
      cursor: pointer;
    }
    &:hover {
      transform: scale(1.5);
      transition: 0.35s ease-in-out;
      transition: 0.35s ease-in;
    }
  }
  .gallery {
    bottom: 10px;
    right: 10px;
    position: absolute;
    z-index: 9999;
  }
}
</style>

