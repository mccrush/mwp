import ClassBasic from './ClassBasic'

class ClassProjects extends ClassBasic {
  type = 'projects'
  links = []
  passwords = []
  contacts = []
  tasks = []
}

export const factoryProjects = () => Object.assign({}, new ClassProjects())