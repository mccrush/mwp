export default {
  state: {
    currentProject: JSON.parse(localStorage.getItem('mw-currentProject')) || null,
    frameName: localStorage.getItem('mw-frameName') || 'FormLinks',
    frameType: localStorage.getItem('mw-frameType') || 'links',
  },
  mutations: {
    setCurrentProject(state, { currentProject }) {
      state.currentProject = currentProject
      localStorage.setItem('mw-currentProject', JSON.stringify(currentProject))
    },
    setFrameName(state, name) {
      state.frameName = name
      localStorage.setItem('mw-frameName', name)
    },
    setFrameType(state, type) {
      state.frameType = type
      localStorage.setItem('mw-frameType', type)
    },
  },

  getters: {
    currentProject: state => state.currentProject,
    frameName: state => state.frameName,
    frameType: state => state.frameType
  }
}