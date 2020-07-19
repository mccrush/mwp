import { auth } from "@/main.js";
import { db } from '@/main.js'

export default {
  state: {
    projects: []
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
    addProject(state, { doc }) {
      state.projects.push(doc)
    },
    getProjects(state, { projects }) {
      state.projects = projects
    }
  },
  actions: {
    async removeDoc({ commit, dispatch }, { collection, id }) {
      try {
        await db.collection(collection).doc(id).delete()
        console.log('Документ успешно удален projects')
        commit('removeDoc', { collection, id })
      } catch (err) {
        //throw err
        console.log('Ошибка при удалении документа projects:', err)
      } finally {
      }
    },
    async updateLogin({ commit, dispatch }, { doc }) {
      try {
        await db.collection('logins').doc(doc.id).update(doc)
        console.log('Документ успешно обновлен projects')
        commit('updateLogin', { doc })
      } catch (err) {
        //throw err
        console.log('Ошибка при обновлении документа projects:', err)
      } finally {
      }
    },
    async addProject({ commit }, { doc }) {
      try {
        await db.collection("users").doc(auth.currentUser.uid).collection('projects').doc(doc.id).set(doc, { merge: true })
        console.log('Документ успешно создан projects')
        commit('addProject', { doc })
      } catch (err) {
        //throw err
        console.log('Ошибка при создании документа projects:', err)
      } finally {
      }
    },
    async getProjects({ commit }) {
      let projects = []
      try {
        const ref = db.collection("users").doc(auth.currentUser.uid).collection('projects')
        const snapshot = await ref.get()
        snapshot.forEach(doc => {
          projects.push(doc.data())
        });
        commit('getProjects', { projects })
      } catch (err) {
        throw err
      } finally {
      }
    }
  },
  getters: {
    projects: state => state.projects,
  }
}