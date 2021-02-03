<template>
  <div class="list-of-topics" v-on:click="loadQuizContents">
    <ul class="list-of-categories">
      <li>General Knowledge</li>
      <li>Movies</li>
      <li>Sports</li>
      <li>Television</li>
      <li>Politics</li>
      <li>Music</li>
      <li>Comics</li>
      <li>Games</li>
      <li>History</li>
      <li>Animations/Cartoons</li>
    </ul>
    <div class="timer" v-if="getDataLoaded === true && getTimer <= 600 && getTimer > 0">
      <p>Time left to complete quiz:</p>
      <timer/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import timer from "./timer.vue";
export default {
  name: "category",
  data() {
    return { categoryType: "" };
  },
  computed: {
    ...mapState({
      getDataLoaded: state => state.dataLoaded,
      getTimer: state => state.timer
    })
  },
  components: {
    timer: timer
  },
  methods: {
    loadQuizContents: function(event) {
      if (event) {
        window.scrollTo(0, 0);
        const elem = document.querySelectorAll(".list-of-categories li");
        elem.forEach(item => {
          if (item.classList.contains("highlight-text")) {
            item.classList.remove("highlight-text");
          }
        });
        event.target.classList.add("highlight-text");
        this.categoryType = event.target.innerText;
        this.$store.dispatch("callLoaderAction", {
          value: true
        });
        switch (this.categoryType) {
          case "General Knowledge":
            this.$store.dispatch("callData", "callGeneralKnowledge");
            break;
          case "Sports":
            this.$store.dispatch("callData", "callSports");
            break;
          case "Movies":
            this.$store.dispatch("callData", "callMovies");
            break;
          case "Television":
            this.$store.dispatch("callData", "callTelevision");
            break;
          case "Politics":
            this.$store.dispatch("callData", "callPolitics");
            break;
          case "Music":
            this.$store.dispatch("callData", "callMusic");
            break;
          case "Comics":
            this.$store.dispatch("callData", "callComics");
            break;
          case "Games":
            this.$store.dispatch("callData", "callGames");
            break;
          case "History":
            this.$store.dispatch("callData", "callHistory");
            break;
          case "Animations/Cartoons":
            this.$store.dispatch("callData", "callAnimations");
            break;
          default:
            break;
        }
        this.$store.dispatch("storeCategory", this.categoryType);
      }
    }
  }
};
</script>

<style>
.list-of-topics {
  padding-top: 10px;
}
.list-of-topics ul li {
  cursor: pointer;
  padding: 10px;
}
.list-of-topics li:hover {
  font-size: 22px;
}
.timer {
  position: fixed;
  bottom: 30px;
  border-top: 1px dashed white;
  width: inherit;
}
.highlight-text {
  font-size: 24px;
}
</style>
