// возможные bg:
// alert-primary
// alert-success
// alert-warning
// alert-danger

export default {
  state: {
    message: { text: '', bg: 'alert-primary' }
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