import './scss/styles.scss'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import fireApp from './firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(fireApp)

let app

onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = createApp(App).use(store).mount('#app')
  }
  if (user) {
    console.log('main.js : Пользователь авторизован')
    store.commit('setCurrentUser', user)
    store.commit('setCurrentUserId', user.uid)
    store.commit('setCurrentUserEmail', user.email)
    store.dispatch('getItemsRT', { type: 'projects', currentUserId: user.uid })
  } else {
    console.log('main.js: Пользователь не авторизован. user = ', user)
    store.commit('setCurrentUserId', '')
    store.commit('setCurrentUserEmail', '')
  }
})