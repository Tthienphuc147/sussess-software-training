
<template>
  <div id="binding">
   <div class="container">
     <input type="text" class="form-control" v-model="name">
     <div class="my-2">
       {{name}}
     </div>
     <div class="my-3">
       <div class="btn btn-primary" @click="isShow =! isShow">Click</div>
       <p v-if="isShow">{{name}}</p>
       <form action="" class="my-4">
            <input type="text" class="form-control" v-model="name">
         <button @click.prevent="name = 'a'" class="btn-view"  :class="[{blue: isShow},{white: isShow}]">
         View
       </button>
       </form>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Binding',
  created() {

  },
  data() {
    return {
      name: 'Chelsea',
      isShow: true,
    }
  },
  props: {
   
  },
  methods: {
  },
}
</script>

<style scoped>
  .btn-view {
    font-size:15px;
    background-color: rgb(160, 63, 63);
    width: 250px;
    padding: 5px 7px;
    border-radius: 4px;
    color:rgb(53, 53, 53);
  }
  .blue {
    background-color: blue;
  }
  .white {
    color: #fff;
  }
</style>

