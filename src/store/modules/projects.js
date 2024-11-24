import { supabase } from './../../supabase/supabaseClient'

export default {
  state: {
    viewTab: localStorage.getItem('mw-viewTab') || 'links',
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

  actions: {
    async updateProjects({ commit }, { projects }) {
      try {
        const { data, error } = await supabase.auth.updateUser({
          data: { projects }
        })
        if (error) throw error
      } catch (error) {
        console.error('projects.js updateProjects()', error)
      }
    },
  },

  getters: {
    viewTab: state => state.viewTab,
    currentProjectId: state => state.currentProjectId
  }
}