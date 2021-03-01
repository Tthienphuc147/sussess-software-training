
<template>
  <div>
    <div class="picture">
      <canvas></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.picture {
  display: block;
  box-sizing: border-box;
  canvas {
    display: block;
    width: 80px;
    height: 80px;
    object-fit: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }
}
</style>

