import ClassProject from './../classes/ClassProject'
import ClassLink from './../classes/ClassLink'
import ClassPassword from './../classes/ClassPassword'
import ClassContact from './../classes/ClassContact'


export const modelsFactory = ({ type }) => {
  let newObject = {}

  switch (type) {
    case 'projects':
      newObject = new ClassProject()
      break
    case 'links':
      newObject = new ClassLink()
      break
    case 'passwords':
      newObject = new ClassPassword()
      break
    case 'contacts':
      newObject = new ClassContact()
      break
  }

  return Object.assign({}, newObject)
}