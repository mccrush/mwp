import { supabase } from './../../supabase/supabaseClient'

export default {
  state: {
    loadingData: false,
    viewTab: localStorage.getItem('mw-viewTab') || 'links',
    currentProjectId: localStorage.getItem('mw-currentProjectId') || '',
    projects: [],
    projectsRowId: null
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
    setLoadingData(state, value) {
      state.loadingData = value
    },
    setProjects(state, projects) {
      state.projects = projects
    },
    setProjectsRowId(state, rowId) {
      state.projectsRowId = rowId
    }
  },

  actions: {
    async updateProjects({ commit }, { projects, userId }) {
      try {
        commit('setLoadingData', true)
        const { error } = await supabase
          .from('projects')
          .update({ projects })
          .eq('id', userId)

        if (error) throw error

      } catch (error) {
        console.error('projects.js updateProjects()', error)
      } finally {
        commit('setLoadingData', false)
      }
    },

    async getProjects({ commit }, { userId }) {
      try {
        commit('setLoadingData', true)
        const { data, error } = await supabase
          .from('projects')
          .select('projects')
          .eq('id', userId)

        if (error) throw error
        if (data) {
          if (data.length) {
            commit('setProjects', data[0].projects)
          }
        }
      } catch (error) {
        console.error('projects.js getProjects()', error)
      } finally {
        commit('setLoadingData', false)
      }
    },

    async addProjects({ commit }, { projects, userId }) {
      try {
        commit('setLoadingData', true)
        const { error } = await supabase
          .from('projects')
          .insert({ id: userId, projects })

      } catch (error) {
        console.error('projects.js addProjects()', error)
      } finally {
        commit('setLoadingData', false)
      }
    },

    async getProjectsRowId({ commit }, { userId }) {
      try {
        commit('setLoadingData', true)
        const { data, error } = await supabase
          .from('projects')
          .select('id')
          .eq('id', userId)

        if (error) throw error
        if (data) {
          if (data.length) {
            commit('setProjectsRowId', data[0].id)
          }
        }
      } catch (error) {
        console.error('projects.js getProjectsRowId()', error)
      } finally {
        commit('setLoadingData', false)
      }
    },
  },



  getters: {
    loadingData: state => state.loadingData,
    viewTab: state => state.viewTab,
    currentProjectId: state => state.currentProjectId,
    projects: state => state.projects,
    projectsLength: state => state.projects.length,
    projectsRowId: state => state.projectsRowId
  }
}