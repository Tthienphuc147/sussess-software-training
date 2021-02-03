<template>
  <div id="app">
    <div class="fluid-container">
      <ProductListOne/>
      <ProductListTwo/>
    </div>
  </div>
</template>

<script>

import ProductListTwo from './components/ProductListTwo'
import ProductListOne from './components/ProductListOne'
export default {
  name: 'App',
  components: {
    ProductListTwo,
    ProductListOne,
  },
  data() {
    return {
      
    }
  }
  
}
</script>

<style lang="scss" scoped>
#app {
}
</style>
