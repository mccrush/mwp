import fireApp from './../../firebase'
import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(fireApp)
auth.languageCode = 'ru'

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
        await signInWithEmailAndPassword(auth, email, password)

        console.log('user.js, logIn(), Авторизация прошла успешно');
        commit('setUser', true)
        return true
      } catch (err) {
        throw err
      }
    },
    async logOut({ commit }) {
      try {
        await signOut(auth)
        console.log('user.js, logOut(), Пользователь вышел из системы');
        commit('setUser', false)
      } catch (error) {
        console.log('user.js, logOut(), Ошибка при выходе из системы, err:', error)
      }
    }
  },
  getters: {
    user: state => state.user
  }
}