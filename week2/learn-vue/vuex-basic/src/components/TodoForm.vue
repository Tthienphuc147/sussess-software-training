<template>
    <form @submit.prevent="add">
        <div class="field is-grouped">
            <p class="control is-expanded">
                <input type="text"
                    class="input"
                    v-model="text"
                    placeholder="Add todo..."
                    required />
            </p>
            <p class="control">
                <button type="submit" class="button is-primary"> Add </button>
            </p>
        </div>
    </form>
</template>

<script>
export default {
    name: 'TodoForm',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        add() {
            this.$store.dispatch('addTodo', this.text)
            this.text = ''
        }
    }
}
</script>