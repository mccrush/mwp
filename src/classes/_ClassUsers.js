import ClassBasic from './ClassBasic'

export default class ClassUsers extends ClassBasic {
  constructor(userId) {
    super()
    this.id = String(userId)
    this.user_id = userId
  }
  type = 'users'
  premium = false
  dateStartPremium = ''
  dateEndPremium = ''
  projects = []
}