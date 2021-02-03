<template>
  <div class="score-container">
    <div class="title-container">
      <div class="score">
        You scored
        <span
          v-bind:class="{'score-good':(score > 8), 'score-average':(score<8 && score>=5), 'score-bad':(score<5)}"
        >{{score}}</span> points!
      </div>
      <div class="check-score-board" v-on:click="getScoreBoard">Check your score board</div>
    </div>
    <div class="correct-ans">
      <p class="correct-answers-title">The list of correct answers:</p>
      <correctAnswersList :data="dataSentAnswers"/>
    </div>
  </div>
</template>

<script>
import correctAnswersList from "./correctAnswersList.vue";
import { mapActions, mapState } from "vuex";
export default {
  data: function() {
    return {
      dataSent: this.getAnswer,
      dataSentAnswers: [],
      options: []
    };
  },
  props: ["score"],
  name: "scoreCard",
  components: {
    correctAnswersList: correctAnswersList
  },
  methods: {
    getScoreBoard: function() {
      this.$store.dispatch("callScoreBoardAction", true);
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapState({
      getCorrectQA: state => state.correctQAList,
      optionsSelectedGetter: state => state.optionsSelected
    }),
    getAnswer: function() {
      this.dataSent = this.getCorrectQA;
    },
    getOptionsSelected: function() {
      this.options = this.optionsSelectedGetter;
      // this.dataSentAnswers = [...this.dataSent];
      if (this.dataSent && this.options) {
        this.dataSent.forEach((item, key) => {
          this.options.forEach((item1, key1) => {
            if (key === item1.key) {
              this.dataSentAnswers[key] = {
                question: item.question,
                correctAnswer: item.correctAnswer,
                userAnswer: item1.option
              };
              if (item.correctAnswer === item1.option) {
                this.dataSentAnswers[key].correct = true;
              } else {
                this.dataSentAnswers[key].correct = false;
              }
            }
          });
        });
      }

      return this.dataSentAnswers;
    }
  },
  watch: { getAnswer: Function, getOptionsSelected: Function }
};
</script>

<style>
.score,
.score-text {
  font-weight: bold;
  font-size: 32px;
  text-align: left;
  display: inline-block;
}
.check-score-board {
  position: relative;
  right: 45px;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
.check-score-board:hover {
  color: #000;
}
.score-good {
  color: seagreen;
}
.score-average {
  color: darkorange;
}
.score-bad {
  color: red;
}
.img-container {
  text-align: center;
}
.img-container img {
  width: 75%;
}
.score-container {
  padding-left: 5%;
}
.correct-answers-title {
  font-weight: bold;
  padding-top: 25px;
  font-style: italic;
}
.title-container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>
