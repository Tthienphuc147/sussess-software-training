import * as types from "../../mutation-types";

const state = {
  todoStatus: "pending",
};

const getters = {
  todoStatus: (state) => {
    return state.todoStatus;
  },
};

const mutations = {
  [types.SET_TODO_STATUS]: (state, filter) => {
    state.todoStatus = filter;
  },
};

const actions = {
  setTodoStatus: ({ commit }, filter) => {
    commit(types.SET_TODO_STATUS, filter);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
