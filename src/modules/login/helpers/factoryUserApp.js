import ClassUserApp from './../../../classes/ClassUserApp'

export const factoryUserApp = (currentUserId) => {
  const newItem = new ClassUserApp(currentUserId)

  return Object.assign({}, newItem)
}