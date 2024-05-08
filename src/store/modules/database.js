import fireApp from './../../firebase'
import { getFirestore, doc, setDoc, updateDoc, getDoc, deleteDoc } from 'firebase/firestore'
const db = getFirestore(fireApp)

export default {
  state: {
    loading: false,
    userApp: null
  },

  mutations: {
    updateLoadingStatus(state, value) {
      state.loading = value
    },
    setUserApp(state, item) {
      state.userApp = item
    }
  },

  actions: {
    async addItem({ commit }, { item }) {
      commit('updateLoadingStatus', true)
      try {
        await setDoc(doc(db, item.type, item.id), item)
        return true
      } catch (error) {
        console.error('error database.js setItem()', error)
      } finally {
        commit('updateLoadingStatus', false)
      }
    },

    async getItem({ commit }, { type, currentUserId }) {
      commit('updateLoadingStatus', true)
      try {
        const docSnap = await getDoc(doc(db, type, currentUserId))
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          commit('setUserApp', docSnap.data())
        } else {
          console.log("database.js getItem() No such document!");
        }
      } catch (error) {
        console.error('error database.js getItem()', error)
      } finally {
        commit('updateLoadingStatus', false)
      }
    },

    async updateItem({ commit }, { item }) {
      commit('updateLoadingStatus', true)
      try {
        await updateDoc(doc(db, item.type, item.id), item)
      } catch (error) {
        console.error('error database.js updateItem()', error)
      } finally {
        commit('updateLoadingStatus', false)
      }
    },

    async deleteItem({ commit }, { item }) {
      commit('updateLoadingStatus', true)
      try {
        await deleteDoc(doc(db, item.type, item.id))
      } catch (error) {
        console.error('error database.js deleteItem()', error)
      } finally {
        commit('updateLoadingStatus', false)
      }
    }
  },

  getters: {
    userApp: state => state.userApp
  }
}