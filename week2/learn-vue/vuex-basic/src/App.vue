<template>
  <div id="app">
    <todo-app></todo-app>
  </div>
</template>

<script>
import TodoApp from './components/TodoApp'
export default {
  name: 'App',
  components: {
        TodoApp
    }
}
</script>

<style>
#app {
}
</style>
