//import getDateNow from './getDateNow'
export default (title) => {
  return {
    id: Date.now().toString(),
    title,
    desc: '',
    url: '',
    disc: '',
    admin: '',
    hosting: '',
    domen: '',
    contacts: {},
    logins: {},
    runs: 1
  }
}