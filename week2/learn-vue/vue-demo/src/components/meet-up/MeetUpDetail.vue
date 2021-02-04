
<template>
  <div>
    <MeetUp :title="meetUpDetail.title"></MeetUp>
    <div class="row m-0 py-4">
      <div class="col-md-8">
        <img class="img-fluid" :src="meetUpDetail.imgUrl" alt="" />
      </div>

      <div class="col-md-4">
        <h3 class="my-3">Description</h3>
        <p>
          {{ meetUpDetail.description }}
        </p>
        <button class="my-3 btn btn-sm">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import MeetUp from "./MeetUp";
import { mapGetters } from "vuex";
export default {
  components: { MeetUp },
  name: "MeetUpDetail",
  created() {},
  data() {
    return {
      meetUpDetail: Object,
    };
  },
  props: ["id"],
  computed: {
    ...mapGetters(["getDetailMeetUp"]),
  },
  mounted() {
    this.meetUpDetail = this.getDetailMeetUp(this.id);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.btn {
  background-color: rgb(224, 224, 224);
  color: rgb(44, 44, 44);
  border: 1px rgb(224, 224, 224);
  font-weight: bold;
}
</style>

