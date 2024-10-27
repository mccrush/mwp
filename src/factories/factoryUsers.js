import ClassUsers from './../classes/ClassUsers'

export const factoryUsers = (userId) => Object.assign({}, new ClassUsers(userId))