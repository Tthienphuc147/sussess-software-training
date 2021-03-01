
<template>
  <div>
    <div class="container py-4 px-2">
      <div class="camera">
        <video autoplay class="feed"></video>
        <button class="btn btn-sm snap my-4" v-on:click="$emit('takePicture')">
          Snap
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Camera",
  created() {},
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
  .feed {
    display: block;
    width: 100%;
    max-width: 1280px;
    background-color: #000;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    transform: rotateY(360deg);
    transform: rotateX(360deg);
  }
  .snap {
    margin: 10px 0;
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0;
    background-color: rgb(114, 171, 218);
    color: #fff;
    outline: none;
    cursor: pointer;
  }
}
</style>

