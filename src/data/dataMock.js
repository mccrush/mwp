import { factory_users } from './../modules/login/factories/factory_users'

export const getDataMock = (type) => {
  const Factories = {}
  const typeArray = []
  typeArray.push(Factories[type])
  return typeArray
}