<template>
  <div>
    <MeetUp :title="'all meetups'"></MeetUp>
    <div class="container">
      <div class="row">
        <div
          class="col-xl-3 col-md-6 mb-4"
          v-for="(item, index) in getAllMeetUpData"
          :key="index"
        >
          <div class="card border-0 shadow">
            <img
              :src="item.imageUrl"
              class="card-img-top"
              alt="..."
              height="200px"
            />
            <div class="card-body">
              <h5 class="card-title mb-2">
                <i class="fa fa-location-arrow mr-2" aria-hidden="true"></i>
                {{ item.title }}
              </h5>
              <div class="card-text text-black-50">
                <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                {{ item.date }}
              </div>
              <div class="card-text text-black-50 my-2 d-flex flex-column">
                <span class="font-weight-bold"> Desctiption </span>
                <span>
                  {{ item.description }}
                </span>
              </div>
              <div class="card-button">
                <router-link :to="`/meet-up/meet-up-detail/${item.id}`"
                  ><button class="btn btn-primary btn-sm my-3">
                    View Meetup
                  </button></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import MeetUp from "./MeetUp";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { MeetUp },
  name: "MeetUpList",
  created() {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getAllMeetUpData"]),
  },
  props: {},
  methods: {
    ...mapActions(["loadMeetUps"]),
  },
};
</script>

<style lang="scss" scoped>
.card-button {
  button {
    background-color: rgb(224, 224, 224);
    color: rgb(44, 44, 44);
    border: 1px rgb(224, 224, 224);
    font-weight: bold;
  }
}
.card-img-top {
  object-fit: cover;
}
</style>
