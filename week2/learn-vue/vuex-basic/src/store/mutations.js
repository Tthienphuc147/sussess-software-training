import * as types from "./mutation-types";

const mutations = {
  [types.ADD_TODO]: (state, text) => {
    state.todos.push({
      id: state.sequence,
      text,
      done: false,
    });
    state.sequence += 1;
  },
  [types.MARK_AS_DONE]: (state, id) => {
    const index = state.todos.map((todo) => todo.id).indexOf(id);
    state.todos[index].done = true;
  },
};

export default mutations;
