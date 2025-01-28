import ClassBasic from './../../../helpers/ClassBasic'

class ClassProjects extends ClassBasic {
  type = 'projects'
  links = []
  passwords = []
  contacts = []
  tasks = []
}

export const factory_projects = () => Object.assign({}, new ClassProjects())