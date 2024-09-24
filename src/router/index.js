import { dataPages } from './../data/dataPages'

export const router = (viewPage) => dataPages.find(item => item.viewPage === viewPage).name
