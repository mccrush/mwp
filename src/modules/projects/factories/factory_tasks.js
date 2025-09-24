import ClassBasic from './../../../helpers/ClassBasic'

class ClassTasks extends ClassBasic {
  type = 'tasks'
  childrens = []
  priority_color = ''
}

export const factory_tasks = () => Object.assign({}, new ClassTasks())