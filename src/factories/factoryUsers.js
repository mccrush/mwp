import ClassBasic from './ClassBasic'

class ClassUsers extends ClassBasic {
  premium = false
  subscription = false
  dateStartPremium = ''
  dateEndPremium = ''
}

export const factoryUsers = () => Object.assign({}, new ClassUsers())