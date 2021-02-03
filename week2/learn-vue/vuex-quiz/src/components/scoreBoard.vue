<template>
  <div class="scoreboard-container">
    <p>* Note: The score board for this session is below. Please do not refresh the page</p>
    <table class="score-table">
      <tr>
        <th>Category</th>
        <th>Score</th>
      </tr>
      <tr v-for="(item, index) in getScoreArray" v-bind:key="index">
        <td v-if="item.category !== ''">{{item.category}}</td>
        <td v-if="item.count >=0">{{item.count}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import category from "./category.vue";
import { mapState } from "vuex";
export default {
  name: "scoreBoard",
  components: {
    category: category
  },
  computed: {
    ...mapState({
      getScoreArray: state => state.scoreArray
    })
  }
};
</script>

<style>
.scoreboard-container p {
  color: red;
}
.score-table {
  width: 100%;
  padding-top: 15px;
  margin-top: 30px;
}
.score-table tr:nth-child(2n) {
  background-color: #f2f2f2;
}
.score-table th {
  padding: 10px 20px;
}

.score-table td {
  padding: 8px 20px;
}
</style>
