export default {
  state: {
    viewPage: localStorage.getItem('mw-viewPage') || 'PageProjects',
  },
  mutations: {
    setViewPage(state, viewPage) {
      state.viewPage = viewPage
      localStorage.setItem('mw-viewPage', viewPage)
    },
  },

  getters: {
    viewPage: state => state.viewPage
  }
}