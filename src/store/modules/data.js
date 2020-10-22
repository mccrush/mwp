import { db } from '@/firebase.js'

export default {
  state: {
    logins: []
  },
  mutations: {
    removeDoc(state, { collection, id }) {
      let tempDoc = state[collection].filter(doc => doc.id != id)
      state[collection] = tempDoc
    },
    updateDoc(state, { collection, doc }) {
      const index = state[collection].findIndex(col => col.id === doc.id)
      state[collection][index] = doc
    },
    addDoc(state, { doc }) {
      state.logins.push(doc)
    },
    getData(state, { logins }) {
      state.logins = logins
    }
  },
  actions: {
    async removeDoc({ commit, dispatch }, { collection, id }) {
      try {
        await db.collection(collection).doc(id).delete()
        console.log('Документ успешно удален')
        commit('removeDoc', { collection, id })
      } catch (err) {
        //throw err
        console.log('Ошибка при удалении документа:', err)
      } finally {
      }
    },
    async updateDoc({ commit, dispatch }, { collection, doc }) {
      try {
        await db.collection(collection).doc(doc.id).update(doc)
        console.log('Документ успешно обновлен')
        commit('updateDoc', { collection, doc })
      } catch (err) {
        //throw err
        console.log('Ошибка при обновлении документа:', err)
      } finally {
      }
    },
    async addDoc({ commit }, { doc }) {
      try {
        await db.collection('logins').doc(doc.id).set(doc, { merge: true })
        console.log('Документ успешно создан')
        commit('addDoc', { doc })
      } catch (err) {
        //throw err
        console.log('Ошибка при создании документа:', err)
      } finally {
      }
    },
    async getData({ commit }) {
      let logins = []
      try {
        const ref = db.collection('logins')
        const snapshot = await ref.get()
        snapshot.forEach(doc => {
          logins.push(doc.data())
        });
        commit('getData', { logins })
      } catch (err) {
        throw err
      } finally {
      }
    }
  },
  getters: {
    logins: state => state.logins,
  }
}