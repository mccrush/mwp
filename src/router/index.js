import { dataPages } from './../data/dataPages'
import store from './../store'

export const router = (viewPage) => {
  console.log('router.js currentUserId =', store.gettters.currentUserId);

  if (store.gettters.currentUserId) {
    if (viewPage === 'PageLogin') {
      return 'PageProjects'
    }
    return dataPages.find(item => item.viewPage === viewPage).name
  }
  return 'PageLogin'
}
