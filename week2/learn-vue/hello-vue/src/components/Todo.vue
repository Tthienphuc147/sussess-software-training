
<template>
  <div>
    <div class="container ">
      <ul class="list">
        <div class="form my-3">
        <form action="">
          <h4>Danh sách công việc</h4>
          <div class="d-flex">
              <input type="text" class="form-control input-field" v-model="newTask">
          <button class="btn btn-success" @click.prevent="addTask">Add task</button>
          </div>
        </form>
      </div>
        <li v-for="(task,index) in tasks" :key="index"  class="d-flex align-items-center">
           <input type="checkbox" v-model="task.done" id="task" class="mr-3">
           <label for="task" :class="{done: task.done}" class="mb-0">{{task.name}}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  created() {

  },
  data() {
    return {
      newTask: '',
      tasks: [

      ]
    }
  },
  props: {
   
  },
  methods: {
   addTask : () => {
     this.tasks.push({
       name: this.newTask,
       done: false
     });
   }
  },
}
</script>

<style scoped>
  .list {
    list-style: none;
    background-color:rgb(252, 196, 124);
    padding: 10px 15px;
    min-width:50rem;
    border-radius: 5px;
  }
  .list li {
    color: #fff;
    font-size: 17px;
    font-weight: 600;
  }
  .done {
    text-decoration: line-through;
  }
  .input-field {
    width: 200px;
    margin-right: 5px;
  }
</style>

