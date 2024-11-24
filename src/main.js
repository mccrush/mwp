import './scss/styles.scss'
import 'bs-dark-theme'
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
  //console.log(event, session)

  if (event === 'INITIAL_SESSION') {
    // handle initial session
  } else if (event === 'SIGNED_IN') {
    // handle sign in event
    store.commit('setAuthData', { type: 'userId', data: session.user.id })
    store.commit('setAuthData', { type: 'userEmail', data: session.user.email })
    store.commit('setAuthData', { type: 'userMetaData', data: session.user.user_metadata })
    // store.dispatch('getItem', { type: 'users', userId: session.user.id })
    // store.dispatch('getProjects', { type: 'projects', userId: session.user.id })


    // const channels = supabase.channel('custom-update-channel')
    //   .on(
    //     'postgres_changes',
    //     { event: 'UPDATE', schema: 'public', table: 'users', filter: 'id=eq.' + session.user.id },
    //     (payload) => {
    //       //console.log('Change received!', payload)
    //       store.dispatch('getProjects', { type: 'projects', userId: session.user.id })
    //     }
    //   )
    //   .subscribe()


  } else if (event === 'SIGNED_OUT') {
    // handle sign out event
    store.commit('setAuthData', { type: 'userId', data: null })
    store.commit('setAuthData', { type: 'userEmail', data: null })
    store.commit('setAuthData', { type: 'userMetaData', data: null })
    //store.commit('setItems', { type: 'projects', data: [] })
    store.commit('setViewPage', 'PageLogin')
  } else if (event === 'PASSWORD_RECOVERY') {
    // handle password recovery event
  } else if (event === 'TOKEN_REFRESHED') {
    // handle token refreshed event
  } else if (event === 'USER_UPDATED') {
    // handle user updated event
  }
})