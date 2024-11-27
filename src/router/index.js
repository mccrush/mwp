import { dataPages } from './../data/dataPages'
import store from './../store'

export const router = (viewPage) => {

  if (store.getters.userId) {
    if (viewPage === 'PageLogin') {
      store.commit('setViewPage', 'PageProjects')
      return 'PageProjects'
    } else if (viewPage === 'PageRestorePassword') {
      return 'PageUser'
    }
    return dataPages.find(item => item.viewPage === viewPage).viewPage
  } else if (viewPage === 'PageConfirm') {
    return 'PageConfirm'
  } else if (viewPage === 'PageRestorePassword') {
    return 'PageRestorePassword'
  }
  return 'PageLogin'
}
