import { factory_contacts } from './../factories/factory_contacts'
import { factory_links } from './../factories/factory_links'
import { factory_passwords } from './../factories/factory_passwords'
import { factory_projects } from './../factories/factory_projects'
import { factory_tasks } from './../factories/factory_tasks'

export const createModelItem = type => {
  const Factory = {
    'contacts': factory_contacts(),
    'links': factory_links(),
    'passwords': factory_passwords(),
    'projects': factory_projects(),
    'tasks': factory_tasks()
  }
  return Factory[type]
}