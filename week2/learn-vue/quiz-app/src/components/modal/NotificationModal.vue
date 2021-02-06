
<template>
  <div>
    <div class="container">
      <div class="d-flex flex-column align-items-center">
          <img src="../../assets/source.gif" alt="" class="mt-2" width="100px">
      <div class="title text-center">
         Congratulations
      </div>
      </div>
      <div class="content my-2 text-center">
        <h4>Quiz completed successfully</h4>
        <p>You answered <b>{{correctAnswer}}</b> correct questions</p>
      </div>
      <div class="button-area d-flex justify-content-center">
        <button class="btn btn-info btn-sm" @click="$emit('restart')">Restart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotificationModal',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   correctAnswer: Number,
   restart: Function
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
 .container {
   .title {
   font-size:30px;
   font-weight: bold;
   color: rgb(53, 145, 11);
   }
}
</style>

