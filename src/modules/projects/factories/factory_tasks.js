import ClassBasic from './../../../helpers/ClassBasic'

class ClassTasks extends ClassBasic {
  type = 'tasks'
  childrens = []
}

export const factory_tasks = () => Object.assign({}, new ClassTasks())