import ClassProjects from './../classes-virtual/ClassProjects'
import ClassLinks from './../classes-virtual/ClassLinks'
import ClassPasswords from './../classes-virtual/ClassPasswords'
import ClassContacts from './../classes-virtual/ClassContacts'


export const factoryModels = ({ type }) => {
  let newObject = {}

  switch (type) {
    case 'projects':
      newObject = new ClassProjects()
      break
    case 'links':
      newObject = new ClassLinks()
      break
    case 'passwords':
      newObject = new ClassPasswords()
      break
    case 'contacts':
      newObject = new ClassContacts()
      break
  }

  return Object.assign({}, newObject)
}