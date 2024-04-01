export default {
  state: {
    currentProject: JSON.parse(localStorage.getItem('mw-currentProject')) || null,
    //projectId: localStorage.getItem('projectId') || '',
    frameName: localStorage.getItem('mw-frameName') || 'LinksMain',
  },
  mutations: {
    // removeCont(state, indexCont) {
    //   const id = state.projectId
    //   const index = state.projects.findIndex(item => item.id === id)
    //   state.projects[index].contacts.splice(indexCont, 1)
    // },
    // addCont(state) {
    //   const id = state.projectId
    //   const index = state.projects.findIndex(item => item.id === id)
    //   state.projects[index].contacts.unshift({ name: '', phone: '', email: '', comment: '' })
    // },
    // removePass(state, indexPass) {
    //   const id = state.projectId
    //   const index = state.projects.findIndex(item => item.id === id)
    //   state.projects[index].passwords.splice(indexPass, 1)
    // },
    // addPass(state) {
    //   const id = state.projectId
    //   const index = state.projects.findIndex(item => item.id === id)
    //   state.projects[index].passwords.unshift({ title: '', login: '', password: '', comment: '' })
    // },
    // removeProject(state, id) {
    //   state.projects = state.projects.filter(item => item.id !== id)
    // },
    setCurrentProject(state, { currentProject }) {
      state.currentProject = currentProject
      localStorage.setItem('mw-currentProject', JSON.stringify(currentProject))
    },
    // setProjectId(state, id) {
    //   state.projectId = id
    //   localStorage.setItem('projectId', id)
    // },
    setFrameName(state, frame) {
      state.frameName = frame
      localStorage.setItem('mw-frameName', frame)
    },
    // getProjects(state, projects) {
    //   state.projects = projects
    // },
    // addProject(state, project) {
    //   state.projects.push(project)
    // },
    // changeLoading(state, value) {
    //   state.loading = value
    // },
  },

  getters: {
    //projectId: state => state.projectId,
    currentProject: state => state.currentProject,
    frameName: state => state.frameName
  }
}