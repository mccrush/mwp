export default {
  state: {
    frameName: localStorage.getItem('mw-frameName') || 'FormLinks',
    frameType: localStorage.getItem('mw-frameType') || 'links',
    modalType: 'ModalUser'
  },
  mutations: {
    setFrameName(state, name) {
      state.frameName = name
      localStorage.setItem('mw-frameName', name)
    },
    setFrameType(state, type) {
      state.frameType = type
      localStorage.setItem('mw-frameType', type)
    },
    setModalType(state, type) {
      state.modalType = type
    },
  },

  getters: {
    frameName: state => state.frameName,
    frameType: state => state.frameType,
    modalType: state => state.modalType
  }
}