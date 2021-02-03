
<template>
  <div>
    <div class="product-area">
      <h1>Product list one</h1>
      <ul>
        <li v-for="(item,index) in saleProducts" v-bind:key="index">
          <span>
             {{item.name}}  <span class="price">${{item.price}}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'ProductListOne',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    ...mapGetters([
            'saleProducts'
    ])
  },
  methods: {
   
  },
}
</script>

<style lang="scss" scoped>
  .product-area {
    background-color: rgb(205, 224, 120);
    padding:20px;
    ul {
      list-style: none;
      display: flex;
      padding:20px 0;
      li {
        display: block;
        width:250px;
        padding:20px;
        border-radius:6px;
        background-color: #fff;
        color:#000;
        margin-right:8px;
        font-size:17px;
        font-weight: bold;
        .price {
          color:rgb(205, 224, 120);
        }
      }
    }
  }
</style>

