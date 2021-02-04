<template>
  <div>
    <MeetUp :title="'create meetup'"></MeetUp>
    <form @submit.prevent="onCreateMeetup">
      <div class="form-content container my-2">
        <div class="row my-3">
          <div class="col-md-6 d-flex flex-column">
            <span>Title *</span>
            <input
              type="text"
              class="form-control mt-2"
              v-model.trim="$v.title.$model"
            />
            <span class="error" v-if="isSubmitted && !$v.title.required"
              >Field is required</span
            >
          </div>
          <div class="col-md-6 d-flex flex-column">
            <span>Location *</span>
            <input type="text" class="form-control mt-2" v-model="location" />
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-6 d-flex flex-column">
            <span>Time *</span>
            <b-form-timepicker class="mt-2" v-model="time"></b-form-timepicker>
          </div>
          <div class="col-md-6 d-flex flex-column">
            <span>Date *</span>
            <b-form-datepicker class="mt-2" v-model="date"></b-form-datepicker>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-6 d-flex flex-column">
            <span>Image URL *</span>
            <input type="text" class="form-control mt-2" v-model="imgUrl" />
            <div class="image-preview">
              <img src="" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-6 d-flex flex-column">
            <span>Description *</span>
            <textarea
              class="form-control mt-2"
              name=""
              id=""
              cols="30"
              rows="5"
              v-model="description"
            ></textarea>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <button type="submit" class="btn btn-primary btn-sm">
            Create MeetUp
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import MeetUp from "./MeetUp";
import { required } from "vuelidate/lib/validators";
export default {
  components: { MeetUp },
  name: "MeetUpCreate",
  created() {},

  data() {
    return {
      title: "",
      location: "",
      imgUrl: "",
      description: "",
      date: "",
      id: "",
      time: "",
      isSubmitted: false,
    };
  },
  validations: {
    title: {
      required,
    },
    location: {
      required,
    },
    imgUrl: {
      required,
    },
    description: {
      required,
    },
    date: {
      required,
    },
    time: {
      required,
    },
  },
  props: {},
  computed: {},
  methods: {
    onCreateMeetup() {
      this.isSubmitted = true;

      const model = {
        title: this.title,
        location: this.location,
        imgUrl: this.imgUrl,
        description: this.description,
        date: this.date,
        id: "123",
      };
      this.$store.dispatch("createMeetup", model);
      this.$router.push("/meet-up/meet-up-list");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

