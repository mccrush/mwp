import { dataPages } from './../data/dataPages'
import store from './../store'

export const router = (viewPage) => {
  //console.log('router.js store =', store);


  // console.log('router.js userId =', store.getters.userId);
  // console.log('router.js dataPages =', dataPages);
  // console.log('router.js viewPage =', viewPage);

  if (store.getters.userId) {
    if (viewPage === 'PageLogin') {
      store.commit('setViewPage', 'PageProjects')
      return 'PageProjects'
    }
    return dataPages.find(item => item.viewPage === viewPage).viewPage
  } else if (viewPage === 'PageConfirm') {
    return 'PageConfirm'
  }
  return 'PageLogin'
}
