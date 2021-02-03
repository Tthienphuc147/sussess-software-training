<template>
  <div>
    <h1>{{ species }} for Adoption</h1>
    <div class="row">
      <div class="col-md-2" v-for="(item,index) in pets" v-bind:key="index">
        <div class="card">
          <div class="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2_ZZeZG3XdM_bFH_dL0Fm-ijvQhylGEEPA&usqp=CAU" alt="">
          </div>
          <div class="quote text-left d-flex flex-column">
            <span class="mb-1">Name: {{item.name}}</span>
            <span class="mb-1">Breed: {{item.breed}}</span>
            <span class="mb-1">Gender: {{item.gender}}</span>
            <span class="mb-1">Age: {{item.age}}</span>
          </div>
<router-link :to="`/pets/${species}/${index}`">          <button class="btn btn-sm btn-info">Go detail</button></router-link>
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
<style lang="scss" scoped>
 .card {
   display: flex;
   justify-content: between;
   padding:10px;
   margin-bottom:10px;
   .image {
     width: 100%;
     img {
       width: 100%;
     }
   }
 }
</style>