<template>
  <div id="app">
    <div class="container" v-if="quizData.length && quizData.length > 0">
      <Header
        :questionAmount="quizData.length"
        :point="point"
        :questionNo="questionNo"
      ></Header>
      <QuestionBox
        :currentQuestion="quizData[currentQuestionIndex]"
         :next="nextQuestion"
         :calculatePoint="calculate"
         :questionAmount="quizData.length"
      ></QuestionBox>
    </div>
  </div>
</template>

<script>
import QuestionBox from "./components/QuestionBox";
import Header from "./components/Header";
import axios from "axios";
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
      isLastQuestion: Boolean
    };
  },
  mounted() {
    this.getAllQuestions();
  },
  // watch: {
  //   questionNo: {
  //     immediate: true,
  //     handler() {
  //       this.isLastQuestion = this.questionNo === this.quizData && this.quizData.length ? true : false;
  //     }
  //   }
  // },
  methods: {
    getAllQuestions() {
      axios
        .get("https://opentdb.com/api.php?amount=5&category=27&type=multiple")
        .then(
          (res) => {
             (this.quizData = res.data.results.map((item, index) => {
              item["correct"] = { value: item.correct_answer, isCorrect: true };
              item["wrong"] = (item.incorrect_answers || []).map(
                (wrongItem) => {
                  const model = { value: wrongItem, isCorrect: false };
                  return model;
                }
              );
              item["answerList"] = [...item["wrong"], item["correct"]];
              item["answerList"] = _.shuffle([...item["answerList"]]);
              item["questionNo"] = index + 1;
              delete item.correct_answer;
              delete item.incorrect_answers;
              delete item.correct;
              delete item.wrong;
              return item;
            }));
          }
           
        )
        .catch((err) => console.log(err));
    },
    nextQuestion() {
      this.currentQuestionIndex++;
      this.questionNo++;
    },
    calculate(isCorrect) {
      if (isCorrect) {
        this.point += 10;
      } else {
        this.point = this.point > 0 ? this.point - 10 : 0;
      }
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
