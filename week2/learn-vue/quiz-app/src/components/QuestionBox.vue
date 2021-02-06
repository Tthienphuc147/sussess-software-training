<template>
  <div class="d-flex align-items-center flex-column" v-if="currentQuestion">
    <div class="question-box">
      <div class="board">
        <span v-html="currentQuestion.question"></span>
      </div>
    </div>
    <div class="answers-list">
      <div
        class="answer-item d-flex justify-content-center position-relative"
        v-for="(item, index) in answerList"
        :key="index"
        :class="[
          { 'result-selected': item.no === currentAnswer.no },
          isSubmitted && getClassName(item),
        ]"
        @click.prevent="!isSubmitted && chooseAnswer(item)"
      >
        <span class="position-absolute icon-block" v-if="isSubmitted">
          <i
            class="fa fa-check icon icon-correct"
            v-if="item.no === currentAnswer.no && item.isCorrect"
          ></i>
          <i
            class="fa fa-times icon icon-wrong"
            v-if="item.no === currentAnswer.no && !item.isCorrect"
          ></i>
        </span>
        <span v-html="item.value" class="text-center"></span>
      </div>
      <div class="noti mt-2">
        <p v-if="isSubmitted && currentAnswer.isCorrect" class="noti-correct">
          Oh Yeah.Congratulations !
        </p>
        <p v-if="isSubmitted && !currentAnswer.isCorrect" class="noti-wrong">
          Oh No!
        </p>
      </div>
      <div class="d-flex justify-content-center align-align-items-center mt-3">
        <div
          class="btn btn-success mr-2 btn-box"
          @click="submit()"
          v-if="!isSubmitted && currentAnswer && currentAnswer.value"
        >
          Submit
        </div>
        <div
          class="btn btn-info ml-2 btn-box"
          @click="next()"
          v-if="isSubmitted && !isLastQuestion"
        >
          Next
        </div>
      </div>
    </div>
    <modal name="modal">
      <div>
        <div class="container container-modal">
          <div class="d-flex flex-column align-items-center">
            <img
              src="../assets/source.gif"
              alt=""
              class="mt-2"
              width="100px"
            />
            <div class="title text-center">Congratulations</div>
          </div>
          <div class="content my-2 text-center">
            <h4>Quiz completed successfully</h4>
            <p>
              You answered <b>{{ correctAnswerAmount }}</b> correct questions
            </p>
          </div>
          <div class="button-area d-flex justify-content-center">
            <button class="btn btn-info btn-sm" @click="restartPlay()">
              Restart
            </button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
// import NotificationModal from "./modal/NotificationModal";
export default {
  name: "QuestionBox",
  created() {},
  data() {
    return {
      currentAnswer: Object,
      isSubmitted: false,
      isLastQuestion: false,
      questionCount: 0,
    };
  },
  computed: {
    answerList() {
      return this.currentQuestion.answerList.map((item, index) => {
        item["no"] = index++;
        return item;
      });
    },
  },

  props: {
    currentQuestion: Object,
    next: Function,
    calculatePoint: Function,
    questionAmount: Number,
    correctAnswerAmount: Number,
    restart: Function,
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.isSubmitted = false;
        this.currentAnswer = Object;
      },
    },
    questionCount: {
      handler(newValue) {
        console.log(newValue);
        if (newValue === this.questionAmount) {
          this.isLastQuestion = true;
          setTimeout(() => {
            this.$modal.show("modal");
          },2500)
        }
      },
    },
  },
  methods: {
    submit() {
      if (this.currentAnswer && this.currentAnswer.value) {
        this.isSubmitted = true;
        this.questionCount++;
        this.calculatePoint(this.currentAnswer.isCorrect);
      }
    },
    restartPlay() {
      this.isSubmitted = false;
      this.currentAnswer = Object;
      this.questionCount = 0;
      this.isLastQuestion = false;
       this.$modal.hide('modal');
      this.restart();
    },
    chooseAnswer(answer) {
      this.currentAnswer = answer;
    },
    getClassName(answer) {
      if (answer.isCorrect && answer.no === this.currentAnswer.no) {
        return "result-correct";
      }
      if (!answer.isCorrect && answer.no === this.currentAnswer.no) {
        return "result-wrong";
      }
      if (answer.isCorrect) {
        return "result-correct";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.question-box {
  .board {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("../assets/board.png");
    background-position-y: 156px;
    background-size: cover;
    width: 350px;
    height: 150px;
    padding: 20px 10px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
  }
}
.answers-list {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .answer-item {
    padding: 8px 10px;
    margin-bottom: 12px;
    background-color: #fff;
    color: #000;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    min-width: 340px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: transform 0.2s;
    .icon-block {
      top: 6px;
      left: 8px;
      bottom: 0;
    }
    &:hover {
      background-color: rgb(233, 233, 233);
      transform: scale(1.1);
      cursor: pointer;
      transition: 0.5s all;
    }
  }
}
.result {
  &-selected {
    background-color: rgb(188, 235, 253) !important;
    color: rgb(17, 17, 17) !important;
  }
  &-correct {
    background-color: rgb(47, 228, 77) !important;
    color: #fff !important;
  }
  &-wrong {
    background-color: rgb(223, 20, 20) !important;
    color: #fff !important;
  }
}
.btn-box {
  width: 120px;
}
.icon {
  width: 15px;
  height: 15px;
  background-color: #fff;
  border-radius: 50%;
  &-correct {
    color: rgb(47, 228, 77);
  }
  &-wrong {
    color: rgb(223, 20, 20);
  }
}
.noti {
  p {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgb(47, 228, 77);
  }
  .noti-correct {
    color: #fff;
  }
  .noti-wrong {
    color: rgb(223, 20, 20);
  }
}
.container-modal {
  .title {
    font-size: 30px;
    font-weight: bold;
    color: rgb(53, 145, 11);
  }
}
</style>
