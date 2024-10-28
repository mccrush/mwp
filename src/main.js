//import 'bs-dark-theme'
import './scss/styles.scss'

import { Dropdown } from 'bootstrap'

import { supabase } from './supabase/supabaseClient'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'


let app

if (!app) {
  app = createApp(App).use(store).mount('#app')
}
console.log('main.js: App is run')


// События хуков авторизации
const { data } = supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session)

  if (event === 'INITIAL_SESSION') {
    // handle initial session
  } else if (event === 'SIGNED_IN') {
    // handle sign in event
    store.commit('setAuthData', { type: 'userId', data: session.user.id })
    store.commit('setAuthData', { type: 'userEmail', data: session.user.email })
    store.dispatch('getItem', { type: 'users', userId: session.user.id })
    store.commit('setViewPage', 'PageProjects')
  } else if (event === 'SIGNED_OUT') {
    // handle sign out event
    store.commit('setAuthData', { type: 'userId', data: null })
    store.commit('setAuthData', { type: 'userEmail', data: null })
    store.commit('setViewPage', 'PageLogin')
  } else if (event === 'PASSWORD_RECOVERY') {
    // handle password recovery event
  } else if (event === 'TOKEN_REFRESHED') {
    // handle token refreshed event
  } else if (event === 'USER_UPDATED') {
    // handle user updated event
  }
})