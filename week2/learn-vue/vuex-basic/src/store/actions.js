import * as types from "./mutation-types";

const actions = {
  addTodo: (context, text) => {
    context.commit(types.ADD_TODO, text);
  },
  markAsDone: (context, id) => {
    context.commit(types.MARK_AS_DONE, id);
  },
};

export default actions;
