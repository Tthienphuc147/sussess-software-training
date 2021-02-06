const getters = {
  allTodos: (state) => {
    return state.todos;
  },
  completedTodos: (state) => {
    return state.todos.filter((todo) => todo.done);
  },
  pendingTodos: (state) => {
    return state.todos.filter((todo) => !todo.done);
  },
  todos: (state, getters, rootState, rootGetters) => {
    const status = rootGetters["filters/todoStatus"];
    if (status === "all") {
      return getters.allTodos;
    } else if (status === "pending") {
      return getters.pendingTodos;
    } else if (status === "completed") {
      return getters.completedTodos;
    }
  },
};

export default getters;
