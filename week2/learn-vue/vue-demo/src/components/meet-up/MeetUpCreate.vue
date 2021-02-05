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
              v-model="form.title"
              id="title"
              name="title"
              :class="{
                'is-invalid': submitted && $v.form.title.$error,
              }"
            />
            <div
              v-if="submitted && $v.form.title.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.form.title.required">Title is required</span>
            </div>
          </div>
          <div class="col-md-6 d-flex flex-column">
            <span>Location *</span>
            <input
              type="text"
              class="form-control mt-2"
              id="location"
              name="location"
              v-model="form.location"
              :class="{
                'is-invalid': submitted && $v.form.location.$error,
              }"
            />
            <div
              v-if="submitted && $v.form.location.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.form.location.required"
                >Location is required</span
              >
            </div>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-6 d-flex flex-column">
            <span>Time *</span>
            <b-form-timepicker
              class="mt-2"
              v-model="form.time"
              id="time"
              name="time"
              hourCycle="h12"
              :class="{
                'is-invalid': submitted && $v.form.time.$error,
              }"
            ></b-form-timepicker>
            <div
              v-if="submitted && $v.form.time.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.form.time.required">Time is required</span>
            </div>
          </div>
          <div class="col-md-6 d-flex flex-column">
            <span>Date *</span>
            <b-form-datepicker
              class="mt-2"
              v-model="form.date"
              id="date"
              name="date"
              :class="{
                'is-invalid': submitted && $v.form.date.$error,
              }"
            ></b-form-datepicker>
            <div
              v-if="submitted && $v.form.date.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.form.date.required">Date is required</span>
            </div>
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-6 d-flex flex-column">
            <span>Image URL *</span>
            <div
              class="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm"
            >
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"
                class="form-control border-0"
                :class="{
                  'is-invalid': submitted && $v.form.imageUrl.$error,
                }"
              />
              <label
                id="upload-label"
                for="upload"
                class="font-weight-light text-muted"
                >Choose file</label
              >
              <div class="input-group-append">
                <label
                  for="upload"
                  class="btn btn-light m-0 rounded-pill px-4"
                  @click="onPickFile"
                >
                  <i class="fa fa-cloud-upload mr-2 text-muted"></i
                  ><small class="text-uppercase font-weight-bold text-muted"
                    >Choose file</small
                  ></label
                >
              </div>
            </div>
            <div v-if="submitted && form.imageUrl" class="invalid-feedback">
              <span v-if="!form.imageUrl">Image is required</span>
            </div>
            <div class="image-preview">
              <img :src="form.imageUrl" alt="" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-6 d-flex flex-column">
            <span>Description *</span>
            <textarea
              class="form-control mt-2"
              cols="30"
              rows="5"
              v-model="form.description"
              id="description"
              name="description"
              :class="{
                'is-invalid': submitted && $v.form.description.$error,
              }"
            ></textarea>
            <div
              v-if="submitted && $v.form.description.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.form.description.required"
                >Description is required</span
              >
            </div>
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
import { mapActions } from "vuex";

export default {
  components: { MeetUp },
  name: "MeetUpCreate",
  created() {},

  data() {
    return {
      form: {
        title: "",
        location: "",
        imageUrl: "",
        description: "",
        date: "",
        id: "",
        time: "",
      },
      submitted: false,
      image: null,
    };
  },
  validations: {
    form: {
      title: {
        required,
      },
      location: {
        required,
      },
      imageUrl: {
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
  },
  props: {},
  computed: {},
  methods: {
    ...mapActions(["createMeetup"]),
    onCreateMeetup() {
      this.submitted = true;
      this.$v.$touch();
      if (!this.$v.$invalid && this.image) {
        const model = {
          title: this.form.title,
          location: this.form.location,
          image: this.image,
          description: this.form.description,
          date: this.form.date + ` (${this.form.time})`,
        };
        this.createMeetup(model);
        return;
      }
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.form.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
  },
};
</script>

<style lang="scss" scoped>
#upload {
  opacity: 0;
}

#upload-label {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
}

.image-area {
  border: 2px dashed rgba(255, 255, 255, 0.7);
  padding: 1rem;
  position: relative;
}

.image-area::before {
  content: "Uploaded image result";
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  z-index: 1;
}

.image-area img {
  z-index: 2;
  position: relative;
}
.image-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #7777;
  border-style: dashed;
  .img-fluid {
    height: 200px;
  }
}
</style>
