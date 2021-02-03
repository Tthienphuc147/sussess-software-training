<template>
  <div>
    <div class="list-container">
      <div
        class="sticky-container-questions"
        v-if="Object.keys(quizData).length > 0 && (getTimer !== 0 || getTimer !== 1000)"
      >
        <div class="title">{{category}}</div>
        <div class="questions-ans">
          Questions Answered:
          <span class="qcount-value">{{optionsSelectedGetter.length}}</span>
        </div>
      </div>
      <div v-if="Object.keys(quizData).length === 0">
        <p>
          <strong class="title-text-view">Please select a category to start the quiz!</strong>
        </p>
        <p
          class="disclaimer"
        >* Note: There will be 10 questions in each category. Please answer all questions to submit the quiz.</p>
        <div v-if="getLoaderStatus === true" class="loader-custom">
          <!-- <img src="src/assets/spinning.gif" alt="loader"> -->
          <p>Loading...</p>
        </div>
      </div>
      <div v-if="getTimer > 0 && getTimer <= 600" class="list-of-questions">
        <ul class="list-items" v-for="(item, index) in quizData" v-bind:key="item.question">
          <li class="question-item">
            <span>{{Number(index)+1}}.</span>
            {{getQuestion(item.question)}}
          </li>
          <!-- <li>
            <inputAnswers :nameProp="index" :valueProp="item.correct_answer" :dataProp="true"/>
          </li>-->
          <li v-for="(arrayItem) in item.answers" v-bind:key="arrayItem">
            <inputAnswers :nameProp="index" :valueProp="arrayItem"/>
          </li>
          <br>
        </ul>
        <button
          class="submit-btn"
          v-if="Object.keys(quizData).length > 0 && (Object.keys(quizData).length === optionsSelectedGetter.length)"
          v-on:click="submitQuiz"
        >Submit</button>
      </div>
      <div v-if="getTimer === 0 || getTimer === 1000">
        <p>Your time is Up!!!</p>
        <p>Please take the quiz again and submit the answers within the time</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import inputAnswers from "./inputAnswers.vue";
export default {
  data: function() {
    return {
      scroll: false
    };
  },
  methods: {
    submitQuiz: function(event) {
      const arr = [...this.optionsSelectedGetter];
      const answersArray = [...this.getAnswerSet];
      let count = 0;
      arr.forEach(item => {
        if (answersArray.includes(item.option)) {
          count += 1;
        }
      });
      this.$store.dispatch("submitScoreAction", {
        count: count,
        category: this.category
      });
      this.$store.dispatch("storeTimerAction", 1000);
    },
    getQuestion: function(data) {
      return unescape(data);
    },
    scrollTop: function() {
      this.scroll = false;
      window.scrollTo(0, 0);
    },
    scrollFunc: function() {
      window.onscroll = event => {
        if (window.scrollY > 100 && !this.scroll) {
          this.scroll = true;
        } else {
          this.scroll = false;
        }
      };
    }
  },
  components: {
    inputAnswers: inputAnswers
  },
  computed: {
    ...mapState({
      quizData: state => state.quizDataResp,
      count: state => state.count,
      optionsSelectedGetter: state => state.optionsSelected,
      getLoaderStatus: state => state.loader,
      getTimer: state => state.timer,
      category: state => state.category,
      getAnswerSet: state => state.answerSet
    })
  },
  watch: {
    quizData: function() {
      this.scrollTop();
    }
  }
};
</script>

<style>
.submit-btn {
  border: none;
  color: white;
  height: 45px;
  width: 110px;
  background: #463fab;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
}
.question-item {
  font-weight: bold;
  font-style: italic;
  padding-bottom: 5px;
}
.disclaimer {
  padding-top: 10px;
  font-size: 16px;
  color: red;
}
.loader-custom {
  width: 50px;
  position: relative;
  top: 40vh;
  left: 480px;
}
.questions-ans {
  position: relative;
  float: right;
  top: -55px;
  right: 15px;
}
.questions-ans::after {
  clear: both;
}
.qcount-value {
  font-weight: bold;
  color: #463fab;
}
.sticky-container-questions {
  height: 50px;
  position: sticky;
  top: 0px;
  background: white;
  border-bottom: 1px solid lightgrey;
  z-index: 1000;
}
.list-of-questions {
  margin-top: 15px;
}
.sub-text {
  padding-top: 10px;
}
.title-text-view {
  font-size: 26px;
}
</style>
