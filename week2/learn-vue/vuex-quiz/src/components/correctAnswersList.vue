<template>
  <ul class="answers-list">
    <li v-for="(arrayItem, index) in data" v-bind:key="index" class="answer-container">
      <span>
        <strong>{{index+1}}.</strong>
      </span>
      <span>
        <strong>{{getDecoded(arrayItem.question)}}</strong>
      </span>
      <p>
        Your Answer:&nbsp;
        <span
          class="answer answer-item-correct"
          v-if="arrayItem.correct"
        >{{getDecoded(arrayItem.userAnswer)}}</span>
        <span class="answer answer-item-incorrect" v-else>{{getDecoded(arrayItem.userAnswer)}}</span>
      </p>
      <p>
        Correct Answer:&nbsp;
        <span
          class="answer answer-item"
        >{{getDecoded(arrayItem.correctAnswer)}}</span>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: { data: Array },
  name: "correctAnswersList",
  methods: {
    getDecoded: function(data) {
      return unescape(data);
    }
  }
};
</script>

<style>
.answer {
  font-weight: bold;
}
.answer-item {
  color: blue;
}
.answers-list {
  padding-top: 10px;
}
.answer-item-correct {
  color: green;
}
.answer-item-incorrect {
  color: red;
}
.answer-container {
  padding: 10px;
}
</style>
