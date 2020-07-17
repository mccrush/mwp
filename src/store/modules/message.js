export default {
  state: {
    message: { text: '', type: '' }
  },
  mutations: {
    addMessage(state, message) {
      state.message = message
    }
  },
  getters: {
    message: state => state.message
  }
}