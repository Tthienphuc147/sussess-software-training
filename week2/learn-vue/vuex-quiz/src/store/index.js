import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// import * as getters from './getters';
// import * as mutations from './mutations';
// import * as actions from './actions';

Vue.use(Vuex);

// This helps to shuffle the elements of an array
const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const store = new Vuex.Store({
  state: {
    category: "",
    categoryStatus: false,
    quizDataResp: {},
    optionsSelected: [],
    score: -1,
    payload: false,
    dataLoaded: false,
    timer: 600,
    loader: false,
    answerSet: [],
    correctQAList: [],
    scoreArray: [],
    showScoreBoard: false,
  },
  getters: {
    category: (state) => {
      return state.category;
    },
    optionsSelectedGetter: (state) => {
      return state.optionsSelected;
    },
    getQuizData: (state) => state.quizDataResp,
    getScore: (state) => state.score,
    getLoaderStatus: (state) => {
      return state.loader;
    },
    getDataLoaded: (state) => state.dataLoaded,
    getTimer: (state) => state.timer,
    getAnswerSet: (state) => state.answerSet,
    getCorrectQA: (state) => state.correctQAList,
    getShowScoreBoard: (state) => state.showScoreBoard,
    getScoreArray: (state) => state.scoreArray,
  },
  // Mutations should be always sync process
  mutations: {
    storeCategory: function(state, payload) {
      state.category = payload;
    },
    countStatus: function(state, payload) {
      state.optionsSelected = payload;
    },
    changeStoreData: function(state, payload) {
      state.quizDataResp = Object.assign({}, payload);
    },
    submitScore: function(state, payload) {
      state.score = payload.count;
      if (payload.count !== -1) {
        const newArr = state.scoreArray;
        newArr.push({
          count: payload.count,
          category: payload.category,
        });
        state.scoreArray = newArr;
      }
    },
    setLoader: function(state, payload) {
      state.loader = payload.value;
      state.dataLoaded = payload.dataLoad;
    },
    setTimer: function(state, payload) {
      state.timer = payload;
    },
    correctAnsSet: function(state, payload) {
      state.answerSet = payload;
    },
    correctQA: function(state, payload) {
      state.correctQAList = payload;
    },
    setShowScoreBoard: function(state, payload) {
      state.showScoreBoard = payload;
    },
  },
  actions: {
    storeCategory({ commit }, payload) {
      commit("storeCategory", payload);
    },
    countStatusAction({ commit }, payload) {
      commit("countStatus", payload);
    },
    submitScoreAction({ commit }, payload) {
      commit("submitScore", payload);
    },
    callLoaderAction({ commit }, payload) {
      commit("setLoader", payload);
    },
    storeTimerAction({ commit }, payload) {
      commit("setTimer", payload);
    },
    callScoreBoardAction({ commit }, payload) {
      commit("setShowScoreBoard", payload);
    },
    callData({ commit }, payload) {
      var url;
      switch (payload) {
        case "callGeneralKnowledge":
          url =
            "https://opentdb.com/api.php?amount=10&category=9&encode=url3986";

          break;
        case "callSports":
          url =
            "https://opentdb.com/api.php?amount=10&encode=url3986&category=21&difficulty=easy&type=multiple";
          break;
        case "callMovies":
          url =
            "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&encode=url3986";
          break;
        case "callTelevision":
          url =
            "https://opentdb.com/api.php?amount=10&category=14&type=multiple&encode=url3986";
          break;
        case "callPolitics":
          url =
            "https://opentdb.com/api.php?amount=10&category=24&type=multiple&encode=url3986";
          break;
        case "callMusic":
          url =
            "https://opentdb.com/api.php?amount=10&category=12&encode=url3986";
          break;
        case "callComics":
          url =
            "https://opentdb.com/api.php?amount=10&category=29&encode=url3986";
          break;
        case "callGames":
          url =
            "https://opentdb.com/api.php?amount=10&category=15&encode=url3986";
          break;
        case "callHistory":
          url =
            "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&encode=url3986";
          break;
        case "callAnimations":
          url =
            "https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&encode=url3986";
          break;
        default:
          break;
      }
      if (url && url !== "") {
        axios
          .get(url)
          .then((response) => {
            const res = response.data.results;
            let wrongAns = [];
            let totalAnsSet = [];
            let correctAns = [];
            let totalCorrectQA = [];
            Object.values(res).forEach((element, index) => {
              wrongAns = [...element.incorrect_answers];
              let tAns = [...wrongAns];
              tAns.push(element.correct_answer);
              correctAns.push(element.correct_answer);
              var obj = {
                question: element.question,
                answers: shuffle(tAns),
              };
              var cObj = {
                question: element.question,
                correctAnswer: element.correct_answer,
              };
              totalAnsSet.push(obj);
              totalCorrectQA.push(cObj);
            });
            commit("changeStoreData", totalAnsSet);
            commit("correctAnsSet", correctAns);
            commit("correctQA", totalCorrectQA);
            commit("submitScore", { count: -1, category: "" });
            commit("setLoader", { value: false, dataLoad: true });
            commit("setTimer", 600);
            commit("countStatus", []);
            commit("setShowScoreBoard", false);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  // getters: getters,
  // mutations: mutations,
  // actions: actions,
  // modules: {}
});
