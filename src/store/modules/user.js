import { auth } from '@/firebase'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async logIn({ commit }, { email, password }) {
      try {
        await auth.signInWithEmailAndPassword(email, password)
        console.log('store: Авторизация прошла успешно');
        commit('setUser', true)
      } catch (err) {
        throw err
      }
    },
    async logOut({ commit }) {
      try {
        await auth.signOut()
        console.log('store: Пользователь вышел из системы');
        commit('setUser', false)
      } catch (error) {
        console.log('store: Ошибка при выходе из системы, err:', error)
      }
    }
  },
  getters: {
    user: state => state.user
  }
}