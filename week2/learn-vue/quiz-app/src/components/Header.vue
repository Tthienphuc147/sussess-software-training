<template>
  <div>
    <div class="header ">
      <div class="title text-uppercase font-weight-bold text-center">
        quiz app
      </div>
      <div class="sub-title d-flex flex-column w-100 align-items-center">
        <span class="font-weight-bold">Total Point : {{ point }} <span v-if="correctAnswerAmount > 0">(<b>{{correctAnswerAmount}}</b> correct)</span></span>
      </div>

      <div class="progress">
        <div
          class="progress-bar bg-info"
          role="progressbar"
          :style="{ width: progress + '%' }"
          :aria-valuenow="progress"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <span class="w-100 d-flex justify-content-end my-2 progress-text">{{ questionNo }}/{{ questionAmount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  created() {},
  data() {
    return {};
  },
  props: {
    questionAmount: Number,
    point: Number,
    questionNo: Number,
    correctAnswerAmount: Number,
  },
  computed: {
    progress() {
      return (this.questionNo / this.questionAmount) * 100;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  padding: 5px 0;
  .title {
    font-size: 40px;
    color: #fff;
    padding: 15px 0;
  }
  .sub-title {
    font-size: 30px;
    font-weight: 500;
    color: #fff;
    span {
      color: #fff;
      font-size: 20px;
    }
  }
  .progress-text {
    color: #fff;
    font-size: 15px;
  }
}
</style>
