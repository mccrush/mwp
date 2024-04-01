//import getDateNow from './getDateNow'
export default (title) => {
  return {
    id: Date.now().toString(),
    title,
    description: '',
    position: 1,
    url: '',
    disc: '',
    admin: '',
    design: '',
    guthub: '',
    hosting: '',
    domen: '',
    contacts: [],
    passwords: [],
    runs: 1
  }
}