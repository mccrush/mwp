export default {
  state: {
    currentPage: localStorage.getItem('mw-currentPage') || 'app'
  },
  mutations: {
    setCurrentPage(state, page) {
      state.currentPage = page
      localStorage.setItem('mw-currentPage', page)
    },
  },

  getters: {
    currentPage: state => state.currentPage
  }
}