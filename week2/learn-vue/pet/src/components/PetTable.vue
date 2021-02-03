<template>
  <div>
    <h1>{{ species }} for Adoption</h1>
    <!-- <table class="table">
      <thead>
        <th>Name</th>
        <th>Breed</th>
        <th>Gender</th>
        <th>Age</th>
      </thead>
      <tbody>
        <tr v-for="(item,index) in pets" v-bind:key="index">
          <td> <router-link :to="`/pets/${species}/${index}`">{{item.name}}</router-link></td>
          <td>{{item.breed}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.age}}</td>
        </tr>
      </tbody>
    </table> -->
    <div class="row">
      <div class="col-md-4" v-for="(item,index) in pets" v-bind:key="index">
        <div class="card">
          <p>Name: {{item.name}}</p>
          <p>Breed: {{item.breed}}</p>
          <p>Gender: {{item.gender}}</p>
          <p>Age: {{item.age}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    pets: Array
  }
}
</script>
styl