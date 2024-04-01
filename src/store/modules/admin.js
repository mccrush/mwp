export default {
  state: {
    currentProject: JSON.parse(localStorage.getItem('mw-currentProject')) || null,
    frameName: localStorage.getItem('mw-frameName') || 'LinksMain',
  },
  mutations: {
    setCurrentProject(state, { currentProject }) {
      state.currentProject = currentProject
      localStorage.setItem('mw-currentProject', JSON.stringify(currentProject))
    },
    setFrameName(state, frame) {
      state.frameName = frame
      localStorage.setItem('mw-frameName', frame)
    },
  },

  getters: {
    currentProject: state => state.currentProject,
    frameName: state => state.frameName
  }
}