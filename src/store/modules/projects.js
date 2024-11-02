//import { supabase } from './../../supabase/supabaseClient'

export default {
  state: {
    viewTab: localStorage.getItem('mw-viewTab') || 'TabLinks',
  },
  mutations: {
    setViewTab(state, viewTab) {
      state.viewTab = viewTab
      localStorage.setItem('mw-viewTab', viewTab)
    },
  },

  getters: {
    viewTab: state => state.viewTab
  }
}