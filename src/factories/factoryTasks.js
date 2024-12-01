import ClassBasic from './ClassBasic'

class ClassTasks extends ClassBasic {
  type = 'tasks'
  childrens = []
}

export const factoryTasks = () => Object.assign({}, new ClassTasks())