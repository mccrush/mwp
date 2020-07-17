import { auth } from "@/main.js";

export default {
  actions: {
    async logIn({ commit, dispatch }, { email, password }) {
      try {
        await auth.signInWithEmailAndPassword(email, password)
        console.log('Авторизация прошла успешно');
      } catch (err) {
        throw err
      } finally {
      }
    },
    async logOut() {
      await auth.signOut()
    }
  }
}