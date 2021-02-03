<template>
    <section class="section"> 
        <div class="content"> 
            <h1 class="has-text-centered"> Todo App </h1> 
        </div> 
        <todo-form></todo-form> 
        <hr /> 
        <todo-filter></todo-filter>
        <todo-list></todo-list> 
    </section>
</template>

<script>
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
export default {
    name: 'TodoApp',
    components: {
        TodoForm,
        TodoList,
        TodoFilter
    }
}
</script>