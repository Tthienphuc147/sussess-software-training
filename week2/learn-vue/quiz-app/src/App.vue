<template>
  <div id="app">
    <div class="container" v-if="quizData.length && quizData.length > 0">
      <Header
        :questionAmount="quizData.length"
        :point="point"
        :questionNo="questionNo"
        :correctAnswerAmount="correctAnswerAmount"
      ></Header>
      <QuestionBox
        :currentQuestion="quizData[currentQuestionIndex]"
        :next="nextQuestion"
        :calculatePoint="calculate"
        :questionAmount="quizData.length"
        :correctAnswerAmount="correctAnswerAmount"
        :restart="restart"
      ></QuestionBox>
    </div>
    <notifications group="notification" position="top right" />
  </div>
</template>

<script>
import QuestionBox from "./components/QuestionBox";
import Header from "./components/Header";
import axios from "axios";
import Vue from "vue";
import _ from "lodash";
export default {
  name: "App",
  components: {
    QuestionBox,
    Header,
  },
  data() {
    return {
      quizData: Array,
      currentQuestionIndex: 0,
      point: 0,
      questionNo: 1,
      correctAnswerAmount: 0,
    };
  },
  mounted() {
    this.getAllQuestions();
  },
  methods: {
    getAllQuestions() {
      axios
        .get(
          `https://opentdb.com/api.php?amount=5&category=${
            Math.floor(Math.random() * (26 - 23 + 1)) + 23
          }&type=multiple`
        )
        .then((res) => {
          this.quizData = res.data.results.map((item, index) => {
            const correctAnswer = {
              value: item.correct_answer,
              isCorrect: true,
            };
            const wrongAnswers = (item.incorrect_answers || []).map(
              (wrongItem) => {
                const model = { value: wrongItem, isCorrect: false };
                return model;
              }
            );
            item["answerList"] = [...wrongAnswers, correctAnswer];
            item["answerList"] = _.shuffle([...item["answerList"]]);
            item["questionNo"] = index + 1;
            delete item.correct_answer;
            delete item.incorrect_answers;
            return item;
          });
        })
        .catch((err) => console.log(err));
    },
    nextQuestion() {
      this.currentQuestionIndex++;
      this.questionNo++;
    },
    calculate(isCorrect) {
      if (isCorrect) {
        this.point += 10;
        this.correctAnswerAmount++;
        Vue.notify({
          group: "notification",
          title: "Score",
          type: "success",
          text: "+ 10",
        });
      } else {
        this.point = this.point > 0 ? this.point - 10 : 0;
        Vue.notify({
          group: "notification",
          title: "Score",
          type: "error",
          text: "- 10",
        });
      }
    },
    restart() {
      this.getAllQuestions();
      this.currentQuestionIndex = 0;
      this.point = 0;
      this.questionNo = 1;
      this.correctAnswerAmount = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-image: url("assets/quizBg.png");
  background-size: cover;
}
</style>
