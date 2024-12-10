import ClassBasic from './ClassBasic'

class ClassUsers extends ClassBasic {
  premium = false
  subscription = false
  dateStartPremium = ''
  dateEndPremium = ''
  projects = []
}

export const factoryUsers = () => Object.assign({}, new ClassUsers())