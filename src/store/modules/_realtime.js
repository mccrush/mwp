import fireApp from './../../firebase'
import { getDatabase, ref, set, onValue, update, remove, query, orderByChild } from 'firebase/database'
const db = getDatabase(fireApp)

export default {
  state: {
    loadingRT: false,
    projects: [],
    currentProject: JSON.parse(localStorage.getItem('mw-currentProject')) || null,
  },
  mutations: {
    setItemsRT(state, { type, items }) {
      state[type] = items
    },
    updateLoadingStatusRT(state, value) {
      state.loadingRT = value
    },
    setCurrentProject(state, { currentProject }) {
      state.currentProject = currentProject
      localStorage.setItem('mw-currentProject', JSON.stringify(currentProject))
    },
  },
  actions: {
    async removeItemRT({ commit, dispatch }, { item, currentUserId }) {
      commit('updateLoadingStatusRT', true)
      try {
        await remove(ref(db, currentUserId + '/' + item.type + '/' + item.id))
        commit('setCurrentProject', { currentProject: null })
        dispatch('getItemsRT', { type: item.type, currentUserId })
      } catch (error) {
        console.error('error realtime.js removeItemRT()', error)
      } finally {
        commit('updateLoadingStatusRT', false)
      }
    },

    async updateItemRT({ commit }, { item, currentUserId }) {
      commit('updateLoadingStatusRT', true)
      try {
        await update(ref(db, currentUserId + '/' + item.type + '/' + item.id), item)
        commit('setCurrentProject', { currentProject: item })
        console.log('updateItemRT() item.id', item.id)
      } catch (error) {
        console.error('error realtime.js updateItemRT()', error)
      } finally {
        commit('updateLoadingStatusRT', false)
      }
    },

    // Получение Универсальное
    getItemsRT({ commit }, { type, currentUserId }) {
      commit('updateLoadingStatusRT', true)
      try {
        let itemsRef
        itemsRef = query(ref(db, currentUserId + '/' + type), orderByChild('dateCreate'))

        onValue(itemsRef, (snapshot) => {
          //console.log('getItemsRT() run ', type)
          let tempArray = []
          const data = snapshot.val()
          for (let item in data) {
            tempArray.push(data[item])
          }
          commit('setItemsRT', { type, items: tempArray })
        })
      } catch (error) {
        console.error('error getItemsRT()', error)
      } finally {
        commit('updateLoadingStatusRT', false)
      }
    },

    async addItemRT({ commit }, { item, currentUserId }) {
      commit('updateLoadingStatusRT', true)
      try {
        await set(ref(db, currentUserId + '/' + item.type + '/' + item.id), item)
        commit('setCurrentProject', { currentProject: item })
        console.log('addItemRT() add item.id', item.id)
      } catch (error) {
        console.error('error realtime.js addItemRT()', error)
      } finally {
        commit('updateLoadingStatusRT', false)
      }
    }
  },
  getters: {
    projects: state => state.projects,
    currentProject: state => state.currentProject,
    loadingRT: state => state.loadingRT,
  }
}