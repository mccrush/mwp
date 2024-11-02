//import { supabase } from './../../supabase/supabaseClient'

export default {
  state: {
    viewTab: localStorage.getItem('mw-viewTab') || 'TabLinks',
    currentProject: JSON.parse(localStorage.getItem('mw-currentProject')) || null,
  },
  mutations: {
    setViewTab(state, viewTab) {
      state.viewTab = viewTab
      localStorage.setItem('mw-viewTab', viewTab)
    },
    setCurrentProject(state, { currentProject }) {
      state.currentProject = currentProject
      localStorage.setItem('mw-currentProject', JSON.stringify(currentProject))
    },
  },

  getters: {
    viewTab: state => state.viewTab,
    currentProject: state => state.currentProject
  }
}