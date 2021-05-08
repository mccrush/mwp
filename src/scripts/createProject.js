//import getDateNow from './getDateNow'
export default (title) => {
  return {
    id: Date.now().toString(),
    title,
    desc: '',
    url: '',
    disc: '',
    host: '',
    domen: '',
    contacts: {},
    logins: {},
    runs: 1
  }
}