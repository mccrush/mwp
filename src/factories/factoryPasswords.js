import ClassBasic from './ClassBasic'

class ClassPasswords extends ClassBasic {
  type = 'passwords'
  link = ''
  login = ''
  password = ''
}

export const factoryPasswords = () => Object.assign({}, new ClassPasswords())