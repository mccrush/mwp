import { supabase } from './../../supabase/supabaseClient'

export default {
  state: {
    loading: false,
    userId: null,
    userEmail: null,
    userMetaData: null
  },

  mutations: {
    setAuthData(state, { type, data }) {
      state[type] = data
    },
    setLoading(state, value) {
      state.loading = value
    }
  },

  actions: {
    async logIn({ commit }, { email, password }) {
      try {
        commit('setLoading', true)
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) throw error
      } catch (error) {
        console.error('auth.js logIn()', error)
        return 400
      } finally {
        commit('setLoading', false)
      }

    },

    async logOut({ commit }) {
      try {
        commit('setLoading', true)
        const { error } = await supabase.auth.signOut()
        if (error) throw error
      } catch (error) {
        console.error('auth.js logOut()', error)
      } finally {
        commit('setLoading', false)
      }
    },

    // async updateUserEmail({ commit }, { email }) {
    //   try {
    //     const { data, error } = await supabase.auth.updateUser({
    //       email
    //     })

    //     if (error) throw error
    //     if (data) {
    //       return 200
    //     }

    //   } catch (error) {
    //     console.error('auth.js updateUserEmail()', error)
    //   }
    // },

    async updateUserPassword({ commit }, { password }) {
      try {
        commit('setLoading', true)
        const { data, error } = await supabase.auth.updateUser({
          password
        })

        if (error) throw error
        return 200
      } catch (error) {
        console.error('auth.js updateUserPassword()', error)
      } finally {
        commit('setLoading', false)
      }
    },

    async restoreUserPassword({ commit }, { email }) {
      try {
        commit('setLoading', true)
        const { data, error } = await supabase.auth.resetPasswordForEmail(email)

        if (error) throw error
        return 200
      } catch (error) {
        console.error('auth.js restoreUserPassword()', error)
      } finally {
        commit('setLoading', false)
      }
    },

    async registerUser({ commit }, {
      loginData,
      userMetaData
    }) {
      try {
        commit('setLoading', true)
        const { data, error } = await supabase.auth.signUp(
          {
            email: loginData.email,
            password: loginData.password,
            options: {
              data: userMetaData
            }
          }
        )
        if (error) throw error
        if (data) {
          return 200
        }
      } catch (error) {
        console.error('auth.js registerUser()', error)
      } finally {
        commit('setLoading', false)
      }
    },

    async updateUserMetaData({ commit }, { userMetaData }) {
      try {
        commit('setLoading', true)
        // console.log(
        //   'auth.js updateUserMetaData() userMetaData =',
        //   userMetaData
        // )
        const { data, error } = await supabase.auth.updateUser({
          data: userMetaData
        })

        if (error) throw error
        //console.log('auth.js updateUserMetaData(): Данные пользователя успешно обновлены')
      } catch (error) {
        console.error('auth.js updateUserMetaData()', error)
      } finally {
        commit('setLoading', false)
      }
    },

    async resetUserMetaData({ commit }, { userMetaData }) {
      try {
        commit('setLoading', true)
        // const { data, error } = await supabase.auth.updateUser({
        //   data: { projects: [] }
        // })
        const { data, error } = await supabase.auth.updateUser({
          data: userMetaData
        })
        if (error) throw error
        //console.log('auth.js resetUserMetaData(): Данные пользователя успешно сброшены')
      } catch (error) {
        console.error('auth.js resetUserMetaData()', error)
      } finally {
        commit('setLoading', false)
      }
    },

    // async updateProjects({ commit }, { projects }) {
    //   try {
    //     commit('setLoading', true)
    //     const { data, error } = await supabase.auth.updateUser({
    //       data: { projects }
    //     })
    //     if (error) throw error
    //     console.log('auth.js updateProjects(): Проекты успешно обновлены')
    //   } catch (error) {
    //     console.error('auth.js updateProjects()', error)
    //   } finally {
    //     commit('setLoading', false)
    //   }
    // },
  },

  getters: {
    loading: state => state.loading,

    isLoggedIn: state => state.userId !== null,
    userEmail: state => state.userEmail,
    userId: state => state.userId,
    userMetaData: state => state.userMetaData,
  }
}