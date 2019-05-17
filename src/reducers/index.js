import { combineReducers } from 'redux'
import addEmp from './employeeAdd'
import editEmp from './employeeEdit'
import empDetails from './employeeDetails'

export const todoApp = combineReducers({
  addEmp,
  editEmp,
  empDetails
})
