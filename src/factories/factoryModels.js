import { factoryProjects } from './factoryProjects'
import { factoryLinks } from './factoryLinks'
import { factoryPasswords } from './factoryPasswords'
import { factoryContacts } from './factoryContacts'
import { factoryTasks } from './factoryTasks'


export const factoryModels = ({ type }) => {
  switch (type) {
    case 'projects':
      return factoryProjects()
    case 'links':
      return factoryLinks()
    case 'passwords':
      return factoryPasswords()
    case 'contacts':
      return factoryContacts()
    case 'tasks':
      return factoryTasks()
  }
}