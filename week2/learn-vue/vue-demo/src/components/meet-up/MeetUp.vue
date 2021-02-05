<template>
  <div>
    <header class="bg-primary text-center py-5 mb-4">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <i
            @click="$router.go(-1)"
            class="fa fa-arrow-left mr-4"
            aria-hidden="true"
          ></i>
          <h1
            class="font-weight-light text-white text-uppercase font-weight-bold"
          >
            {{ title }}
          </h1>
        </div>
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
  i {
    font-size: 25px;
    color: rgb(53, 53, 53);
    &:hover {
      color: rgb(112, 112, 112);
      cursor: pointer;
    }
  }
  h1 {
    color: rgb(22, 22, 22) !important;
  }
}
</style>
