import ClassBasic from './../../../helpers/ClassBasic'

class ClassPasswords extends ClassBasic {
  type = 'passwords'
  link = ''
  login = ''
  password = ''
}

export const factory_passwords = () => Object.assign({}, new ClassPasswords())