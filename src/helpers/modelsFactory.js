import ClassProject from './../classes/ClassProject'


export const modelsFactory = ({ type }) => {
  let newObject = {}

  switch (type) {
    case 'projects':
      newObject = new ClassProject()
      break
    case 'links':
      newObject = {}
      break
    case 'passwords':
      newObject = {}
      break
    case 'contacts':
      newObject = {}
      break
  }

  return Object.assign({}, newObject)
}