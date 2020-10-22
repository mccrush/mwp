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
    updateLogin(state, { doc }) {
      const index = state.logins.findIndex(col => col.id === doc.id)
      state.logins[index] = doc
    },
    addDoc(state, { doc }) {
      state.logins.push(doc)
    },
    getLogins(state, { logins }) {
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
    async updateLogin({ commit, dispatch }, { doc }) {
      try {
        await db.collection('logins').doc(doc.id).update(doc)
        console.log('Документ успешно обновлен')
        commit('updateLogin', { doc })
      } catch (err) {
        //throw err
        console.log('Ошибка при обновлении документа:', err)
      } finally {
      }
    },
    async addDoc({ commit }, { doc }) {
      try {
        await db.collection('logins').doc(doc.id).set(doc, { merge: true })
        console.log('Документ успешно создан login')
        commit('addDoc', { doc })
      } catch (err) {
        //throw err
        console.log('Ошибка при создании документа login:', err)
      } finally {
      }
    },
    async getLogins({ commit }) {
      let logins = []
      try {
        const ref = db.collection('logins')
        const snapshot = await ref.get()
        snapshot.forEach(doc => {
          logins.push(doc.data())
        });
        commit('getLogins', { logins })
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