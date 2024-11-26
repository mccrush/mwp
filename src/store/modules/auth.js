import { supabase } from './../../supabase/supabaseClient'

export default {
  state: {
    userId: null,
    userEmail: null,
    userMetaData: null
  },

  mutations: {
    setAuthData(state, { type, data }) {
      state[type] = data
    }
  },

  actions: {
    async logIn({ commit }, { email, password }) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
      } catch (error) {
        console.error('auth.js logIn()', error)
      }

    },

    async logOut() {
      try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
      } catch (error) {
        console.error(error)
      }
    },

    async updateUserMetaData({ commit }, { userMetaData }) {
      try {
        console.log(
          'auth.js updateUserMetaData() userMetaData =',
          userMetaData
        )
        const { data, error } = await supabase.auth.updateUser({
          data: userMetaData
        })
        // const { data, error } = await supabase.auth.updateUser({
        //   data: { user_metadata: null }
        // })
        if (error) throw error
        console.log('auth.js updateUserMetaData(): Данные пользователя успешно обновлены')
      } catch (error) {
        console.error('auth.js updateUserMetaData()', error)
      }
    },

    async resetUserMetaData({ commit }, { userMetaData }) {
      try {
        const { data, error } = await supabase.auth.updateUser({
          data: userMetaData
        })
        if (error) throw error
        console.log('auth.js resetUserMetaData(): Данные пользователя успешно сброшены')
      } catch (error) {
        console.error('auth.js resetUserMetaData()', error)
      }
    },

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
    isLoggedIn: state => state.userId !== null,
    userEmail: state => state.userEmail,
    userId: state => state.userId,
    userMetaData: state => state.userMetaData,
    projects: state => state.userMetaData.projects,

    projectsLength: state => state.userMetaData.projects.length
  }
}