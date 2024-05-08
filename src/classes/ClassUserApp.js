import ClassBasic from './ClassBasic'

export default class ClassUserApp extends ClassBasic {
  constructor(currentUserId) {
    super()
    this.id = currentUserId
  }
  type = 'usersApp'
  premium = false
  dateStartPremium = ''
  dateEndPremium = ''
}