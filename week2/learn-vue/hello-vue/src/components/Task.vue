
<template>
  <div>
   <input type="checkbox" v-model="taskData.done" :id="`task${taskData.name}`" class="mr-3">
   <label :for="`task${taskData.name}`" :class="{done: taskData.done}" class="mb-0">{{taskData.name | uppercaseFilter}}</label>
  </div>
</template>

<script>
export default {
  name: 'Task',
  created() {

  },
  data() {
    return {
    }
  },
  // props: ['taskData'],
  props: {
    taskData: Object
  },
  methods: {
   
  },
  computed: {
    sayHello() {
      return 1;
    }
  },
  filters: {
    uppercaseFilter(data) {
      return 'TASK ' + data.toUpperCase();
    }
  }
}
</script>

<style scoped>
.done {
    text-decoration: line-through;
  }
</style>

