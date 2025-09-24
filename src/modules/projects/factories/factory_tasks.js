import ClassBasic from './../../../helpers/ClassBasic'

class ClassTasks extends ClassBasic {
  type = 'tasks'
  childrens = []
  priority_color = '#212529'
}

export const factory_tasks = () => Object.assign({}, new ClassTasks())