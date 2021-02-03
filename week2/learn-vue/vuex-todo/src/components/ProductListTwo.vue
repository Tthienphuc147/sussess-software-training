<template>
  <div class="my-4">
    <div class="product-area">
      <h1>Product list two</h1>
      <ul>
        <li v-for="(item,index) in products" v-bind:key="index">
          <span>
             {{item.name}}  <span class="price">${{item.price}}</span>
          </span>
        </li>
      </ul>
      <button class="btn btn-info" @click="reducePrice(2)">Reduce</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'ProductListTwo',
  created() {

  },
  data() {
    return {
      
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  props: {
  },
  methods: {
    ...mapActions([
      'reducePrice'
    ])
  },
}
</script>

<style lang="scss" scoped>
 .product-area {
    background-color:rgb(100, 127, 177);
    padding:20px;
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      padding:20px 0;
      li {
        display: block;
        width:250px;
        padding:20px;
        border-radius:6px;
        background-color: #fff;
        color:#000;
        margin-bottom:8px;
        font-size:17px;
        font-weight: bold;
        .price {
          color:rgb(100, 127, 177);
        }
      }
    }
 }
</style>

