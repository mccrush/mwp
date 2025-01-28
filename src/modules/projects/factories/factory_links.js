import ClassBasic from './../../../helpers/ClassBasic'

class ClassLinks extends ClassBasic {
  type = 'links'
  link = ''
}

export const factory_links = () => Object.assign({}, new ClassLinks())