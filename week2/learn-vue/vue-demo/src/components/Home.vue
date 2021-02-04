
<template>
  <div class="home-container">
    <div class="button-area py-4 w-100 d-flex justify-content-center">
      <router-link :to="'/meet-up/meet-up-list'"
        ><button class="btn btn-primary mr-3">
          explore meetups
        </button></router-link
      >
      <router-link :to="'/meet-up/meet-up-create'"
        ><button class="btn btn-primary mr-3">
          create meetup
        </button></router-link
      >
    </div>
    <section class="pb-4">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide banner"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://www.leaders-in-law.com/wp-content/uploads/2020/05/vietnam.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://www.leaders-in-law.com/wp-content/uploads/2020/05/vietnam.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://www.leaders-in-law.com/wp-content/uploads/2020/05/vietnam.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.home-container {
  padding: 0 50px;
  .button-area {
    button {
      background-color: rgb(207, 207, 207) !important;
      border-color: rgb(207, 207, 207) !important;
      text-transform: uppercase;
      &:focus {
        border-color: rgb(194, 194, 194) !important;
      }
    }
  }
}
</style>

