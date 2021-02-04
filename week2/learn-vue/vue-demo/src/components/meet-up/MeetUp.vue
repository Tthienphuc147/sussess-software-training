
<template>
  <div>
    <header class="bg-primary text-center py-5 mb-4">
      <div class="container">
        <h1
          class="font-weight-light text-white text-uppercase font-weight-bold"
        >
          {{ title }}
        </h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "MeetUp",
  created() {},
  data() {
    return {};
  },
  props: {
    title: String,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgb(235, 235, 235) !important;
  h1 {
    color: rgb(22, 22, 22) !important;
  }
}
</style>

