import { supabase } from './../../supabase/supabaseClient'

export default {
  state: {
    userData: null,
    projects: []
  },

  mutations: {
    setUserData(state, { data }) {
      state.userData = data
    },
    setItems(state, { type, items }) {
      state[type] = items
    },
  },

  actions: {
    async removeItem({ commit }, { item }) {
      try {
        const { error } = await supabase
          .from(item.type)
          .delete()
          .eq('id', item.id)

        if (error) throw error
      } catch (error) {
        console.error('database.js removeItem()', error)
      }
    },

    async updateItem({ commit }, { item }) {
      try {
        console.log('database.js updateItem() item =', item)

        const { error } = await supabase
          .from(item.type)
          .update(item)
          .eq('id', item.id)

        if (error) throw error
      } catch (error) {
        console.error('database.js updateItem()', error)
      }
    },

    async addItem({ commit }, { item }) {
      try {
        const { error } = await supabase
          .from(item.type)
          .insert(item)

        if (error) throw error
      } catch (error) {
        console.error('database.js addItem()', error)
      }
    },

    async getItem({ commit }, { type, userId }) {
      try {
        console.log('database.js getItem() type =', type)
        console.log('database.js getItem() userId =', userId)
        const { data, error } = await supabase.from(type).select().eq('id', userId)
        if (error) throw error
        if (data) {
          console.log('database.js getItem() data[0] =', data[0])
          commit('setUserData', { data: data[0] })
        }
      } catch (error) {
        console.error('database.js getItem()', error)
      }
    },

    async getItems({ commit }, { type }) {
      try {
        //console.log('database.js getItems() type =', type)
        const { data, error } = await supabase.from(type).select()
        if (error) throw error
        if (data) {
          commit('setItems', { type, items: data })
        }
      } catch (error) {
        console.error('database.js getItems()', error)
      }
    }
  },

  getters: {
    userData: state => state.userData,
    projects: state => state.userData?.projects || []
  }
}