import ClassBasic from './ClassBasic'

class ClassUsers extends ClassBasic {
  proStatus = false
  proFree = false
  balance = 0
  dateStartPro = ''
  dateEndPro = ''
}

export const factoryUsers = () => Object.assign({}, new ClassUsers())