<template>
    <section>
        <div class="block">
            <select class="select" v-model="status">
                <option value="all"> All </option>
                <option value="pending"> Pending </option>
                <option value="completed"> Completed </option>
            </select>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TodoFilter',
    computed: {
        status: {
            get() {
                return this.$store.getters['filters/todoStatus']
            },
            set(value) {
                this.$store.dispatch('filters/setTodoStatus', value)
            }
        }
    }
}
</script>