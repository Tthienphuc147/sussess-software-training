<template>
  <label class="label-container">
    {{getAnswer(valueProp)}}
    <input
      type="radio"
      :name="nameProp"
      :value="valueProp"
      v-on:click="submitOption($event)"
      class="check-custom"
    >
    <span class="checkmark"></span>
  </label>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "inputAnswers",
  props: ["nameProp", "valueProp"],
  data() {
    return {
      // count: 0,
    };
  },
  methods: {
    submitOption: function(event) {
      let value = event.target.value;
      let key = Number(event.target.getAttribute("name"));
      let ans = event.target.getAttribute("data-key");
      const data = {
        option: value,
        key,
        answer: ans
      };
      const arr = [...this.optionsSelectedGetter];
      if (arr.length === 0) {
        arr.push(data);
      } else if (arr.length > 0) {
        arr.forEach((element, index) => {
          if (element.key === key) {
            arr.splice(index, 1);
          }
        });
        arr.push(data);
      }
      //arr.push(data);
      this.$store.dispatch("countStatusAction", arr);
    },
    getAnswer: function(data) {
      return unescape(data);
    }
  },
  computed: mapGetters(["optionsSelectedGetter"])
};
</script>

<style>
.label-container {
  /* display: block; */
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none; */
  font-size: 18px;
}

/* Hide the browser's default radio button */
.label-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.label-container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.label-container input:checked ~ .checkmark {
  background-color: #463fab;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.label-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.label-container .checkmark:after {
  top: 6px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>
