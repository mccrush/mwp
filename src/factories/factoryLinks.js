import ClassBasic from './ClassBasic'

class ClassLinks extends ClassBasic {
  type = 'links'
  link = ''
}

export const factoryLinks = () => Object.assign({}, new ClassLinks())