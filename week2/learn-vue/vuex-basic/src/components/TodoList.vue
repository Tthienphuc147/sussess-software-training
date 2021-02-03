<template>
    <section>
        <table class="table is-fullwidth">
            <tbody>
                <tr v-for="(todo, index) in todos" :key="index">
                    <td> {{ todo.text }} </td>
                    <td> 
                        <a  href="#"
                            v-show="!todo.done"
                            class="button is-pulled-right" 
                            @click.prevent="markAsDone(todo)"> Done </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'TodoList',
    computed: {
        ...mapGetters([
            'todos'
        ])
    },
    methods: {
        markAsDone(todo) {
            this.$store.dispatch('markAsDone', todo.id)
        }
    }
}
</script>