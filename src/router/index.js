import { dataPages } from './../data/dataPages'
import store from './../store'

export const router = (viewPage) => {

  if (store.getters.userId) {
    if (viewPage === 'PageLogin') {
      store.commit('setViewPage', 'PageProjects')
      return 'PageProjects'
    } else if (viewPage === 'PageRestorePassword') {
      return 'PageRestorePassword'
    }
    return dataPages.find(item => item.viewPage === viewPage).viewPage
  } else if (viewPage === 'PagePolicy') {
    return 'PagePolicy'
  } else if (viewPage === 'PageDoc') {
    return 'PageDoc'
  }
  return 'PageLogin'
}
