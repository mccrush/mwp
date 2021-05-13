//import getDateNow from './getDateNow'
export default (title) => {
  return {
    id: Date.now().toString(),
    title,
    description: '',
    url: '',
    disc: '',
    admin: '',
    guthub: '',
    hosting: '',
    domen: '',
    contacts: [],
    passwords: [],
    runs: 1
  }
}