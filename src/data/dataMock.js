import { factory_users } from './../modules/login/factories/factory_users'

import { factory_contacts } from './../modules/projects/factories/factory_contacts'
import { factory_links } from './../modules/projects/factories/factory_links'
import { factory_passwords } from './../modules/projects/factories/factory_passwords'
import { factory_projects } from './../modules/projects/factories/factory_projects'
import { factory_tasks } from './../modules/projects/factories/factory_tasks'

export const getDataMock = (type) => {
  const Factories = {
    'contacts': factory_contacts(),
    'links': factory_links(),
    'passwords': factory_passwords(),
    'projects': factory_projects(),
    'tasks': factory_tasks()
  }
  const typeArray = []
  typeArray.push(Factories[type])
  return typeArray
}