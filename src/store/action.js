import ajax from '../config/ajax'


export default {
  addNum({ commit, state }, id) {
    commit('REMBER_ANSWER', id)
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
    }
  },
  initializeData({ commit }) {
    debugger
    commit('INITIALIZE_DATA')
  }
}