<template>
  <div>
    <p class="run-time" v-if="timer > 0">{{timerMoments}}</p>
    <p v-if="timer === 0">{{message}}</p>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions, mapState } from "vuex";
export default {
  name: "timer",
  data() {
    return {
      timerMoments: moment.utc(600 * 1000).format("mm:ss"),
      timer: 600,
      message: "Times up!",
      counter: false,
      interval: null
    };
  },
  mounted() {
    this.startTimer();
  },
  computed: {
    ...mapState({
      getTimer: state => state.timer
    })
  },
  methods: {
    startTimer() {
      this.interval = setInterval(this.countDown, 1000);
    },
    countDown() {
      if (this.timer > 0 && this.getTimer !== 1000) {
        if (this.counter === false) {
          this.counter = true;
        } else if (this.timer > 0) {
          this.timer -= 1;
          this.timerMoments = moment.utc(this.timer * 1000).format("mm:ss");
          // this.$store.dispatch("storeTimerAction", this.timer);
        } else {
          this.counter = false;
          clearInterval(this.interval);
        }
      } else if (this.getTimer !== 1000 && this.timer === 0) {
        this.$store.dispatch("storeTimerAction", 0);
        this.counter = false;
        clearInterval(this.interval);
      }
    }
  }
};
</script>

<style>
.run-time {
  font-size: 40px;
  font-weight: bold;
}
</style>
