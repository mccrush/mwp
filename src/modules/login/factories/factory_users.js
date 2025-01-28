import ClassBasic from './../../../helpers/ClassBasic'

class ClassUsers extends ClassBasic {
  proStatus = false
  proFree = false
  balance = 0
  dateStartPro = ''
  dateEndPro = ''
}

export const factory_users = () => Object.assign({}, new ClassUsers())