import { auth } from '@/firebase.js'

export default {
  actions: {
    async logIn({ commit, dispatch }, { email, password }) {
      try {
        await auth.signInWithEmailAndPassword(email, password)
        console.log('Авторизация прошла успешно');
        // Ниже неправильно. Переделать
        localStorage.setItem('mwp-page', 'Index')
      } catch (err) {
        throw err
      }
    },
    async logOut() {
      await auth.signOut()
      console.log('Пользователь вышел из системы');
      // Ниже неправильно. Переделать
      localStorage.setItem('mwp-page', 'Login')
    }
  }
}