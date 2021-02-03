<template>
  <div id="main-app">
    <div class="main-container columns">
      <div class="column is-one-quarter side-panel">
        <div class="side-panel-contents">
          <h2 class="title-text">CATEGORIES</h2>
          <category/>
          <!-- <router-link to="/details" v-on:click="clickHandler">About</router-link> -->
        </div>
      </div>
      <div id="info-data" class="columns column is-multiline is-three-quarter">
        <div v-if="getScore < 0 && getShowScoreBoard === false">
          <quizview/>
        </div>
        <div v-if="getScore >= 0 && getShowScoreBoard === false">
          <scoreCard :score="getScore"/>
        </div>
        <div v-if="getShowScoreBoard">
          <scoreBoard/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import category from "./components/category.vue";
import quizview from "./components/quizView.vue";
import scoreCard from "./components/scorecard.vue";
import scoreBoard from "./components/scoreBoard.vue";
import { mapGetters } from "vuex";
export default {
  name: "MainApp",
  data() {
    return {
      message: "Dictionary",
      info: [],
      alert: null,
      searchFilter: false,
      searchData: "",
      loader: true,
      count: 0,
      routedComponent: false
    };
  },
  async mounted() {
    this.routedComponent = false;
    try {
      const response = await axios.get("https://sheetlabs.com/IND/vs");
      this.info = response.data;
      this.loader = false;
    } catch (error) {
      this.alert = "error: " + error.message;
    }
  },
  components: {
    category: category,
    quizview: quizview,
    scoreCard: scoreCard,
    scoreBoard: scoreBoard
  },
  computed: {
    filteredList() {
      this.searchFilter = true;
      this.count = 0;
      return this.info.filter(item => {
        if (item.word.toLowerCase().includes(this.searchData.toLowerCase())) {
          this.count++;
          return item.word;
        }
        return 0;
      });
    }
  },
  methods: {
    searchTermValue: function(value) {
      this.searchData = value;
    },
    clickHandler: function() {
      routedComponent = true;
    }
  },
  computed: mapGetters(["getScore", "getShowScoreBoard"])
};
</script>

<style>
body {
  margin: 0;
}
#main-app {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
}
.column {
  width: 20%;
  margin: 20px;
  margin-top: 0;
}
.column.side-panel {
  background: #463fab;
  color: white;
  margin: 0;
  padding: 20px;
  min-height: 100vh;
}
.title-text {
  text-align: center;
  color: #ecedec;
  font-weight: bold;
  font-size: 30px;
  padding-left: 50px;
}
#info-data {
  margin: 20px 0;
}
.card .card-header {
  font-weight: bold;
  text-align: center;
  display: block;
}
.scroll-to-top {
  height: 40px;
  width: 40px;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 1;
  cursor: pointer;
}
.loader-custom {
  width: 100px;
  height: 100px;
  position: relative;
  top: 40vh;
  left: 480px;
}
.side-panel-contents {
  position: fixed;
}
.card:hover {
  cursor: pointer;
  border: 1px solid grey;
  transform: scale(1.01);
}
</style>