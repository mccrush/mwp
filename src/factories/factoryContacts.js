import ClassBasic from './ClassBasic'

class ClassContacts extends ClassBasic {
  type = 'contacts'
  fields = []
}

export const factoryContacts = () => Object.assign({}, new ClassContacts())