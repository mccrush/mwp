import ClassBasic from './../../../helpers/ClassBasic'

class ClassContacts extends ClassBasic {
  type = 'contacts'
  fields = []
}

export const factory_contacts = () => Object.assign({}, new ClassContacts())