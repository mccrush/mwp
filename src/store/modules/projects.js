//import { supabase } from './../../supabase/supabaseClient'

export default {
  state: {
    viewTab: localStorage.getItem('mw-viewTab') || 'TabLinks',
    currentProjectId: localStorage.getItem('mw-currentProjectId') || '',
  },
  mutations: {
    setViewTab(state, viewTab) {
      state.viewTab = viewTab
      localStorage.setItem('mw-viewTab', viewTab)
    },
    setCurrentProjectId(state, { currentProjectId }) {
      state.currentProjectId = currentProjectId
      localStorage.setItem('mw-currentProjectId', currentProjectId)
    },
  },

  getters: {
    viewTab: state => state.viewTab,
    currentProjectId: state => state.currentProjectId
  }
}