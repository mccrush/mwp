import fireApp from './../../firebase'
import { getDatabase, ref, set, onValue, update, remove, query, orderByChild, equalTo, limitToLast } from 'firebase/database'
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
      try {
        commit('updateLoadingStatusRT', true)
        await remove(ref(db, currentUserId + '/' + item.type + '/' + item.id))
        commit('setCurrentProject', { currentProject: null })
        dispatch('getItemsRT', { type: item.type, currentUserId })
        commit('updateLoadingStatusRT', false)
      } catch (error) {
        console.error('error realtime.js removeItemRT()', error)
      }
    },

    async updateItemRT({ commit }, { item, currentUserId }) {
      try {
        commit('updateLoadingStatusRT', true)
        await update(ref(db, currentUserId + '/' + item.type + '/' + item.id), item)
        commit('setCurrentProject', { currentProject: item })
        console.log('updateItemRT() item.id', item.id)
        commit('updateLoadingStatusRT', false)
      } catch (error) {
        console.error('error realtime.js updateItemRT()', error)
      }
    },

    // Получение Универсальное
    getItemsRT({ commit }, { type, currentUserId }) {
      try {
        commit('updateLoadingStatusRT', true)
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
          commit('updateLoadingStatusRT', false)
        })
      } catch (error) {
        console.error('error getItemsRT()', error)
      }
    },

    async addItemRT({ commit }, { item, currentUserId }) {
      try {
        commit('updateLoadingStatusRT', true)
        await set(ref(db, currentUserId + '/' + item.type + '/' + item.id), item)
        commit('setCurrentProject', { currentProject: item })
        console.log('addItemRT() add item.id', item.id)
        commit('updateLoadingStatusRT', false)
      } catch (error) {
        console.error('error realtime.js addItemRT()', error)
      }
    }
  },
  getters: {
    projects: state => state.projects,
    currentProject: state => state.currentProject,
    loadingRT: state => state.loadingRT,
  }
}