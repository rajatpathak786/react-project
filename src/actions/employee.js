export const createEmployee = (item) => ({
  type: 'CREATE_EMPLOYEE',
  payload: item 
})
export const editEmployee = (item) => ({
  type: 'EDIT_EMPLOYEE',
  payload: item 
})
export const editEmployeeEmp = (item) => ({
  type: 'EDIT_EMPLOYEE_EMP',
  payload: item 
})
export const employeeDetails = (list) => ({
  type: 'EMPLOYEE_DETAILS', 
  payload: list 
})
export const appMenu = (menu) => ({
  type: 'APP_MENU',
  payload: menu
})
export const addTasks = (tasks) => ({
  type: 'ADD_TASKS',
  payload: tasks
})
export const editTasks = (item) => ({
  type: 'EDIT_TASKS',
  payload: item 
})
export const taskDetails = (list) => ({
  type: 'TASK_DETAILS',
  payload: list
})
export const addModules = (modules) => ({
  type: 'ADD_MODULES',
  payload: modules
})
export const moduleDetails = (list) => ({
  type: 'MODULE_DETAILS',
  payload: list
})
export const taskSelect = (list) => ({
  type: 'TASK_SELECT',
  payload: list
})
export const moduleNameUpdate = (list) => ({
  type: 'MODULE_NAME_UPDATE',
  payload: list
})
export const addEmployeeTraining = (items) => ({
  type: 'ADD_EMPLOYEE_TRAINING',
  payload: items
})
export const employeeTrainingDetails = (items) => ({
  type: 'EMPLOYEE_TRAINING_DETAILS',
  payload: items
})
export const addDrift = (drift) => ({
  type: 'ADD_DRIFT',
  payload: drift
})
// export const taskAddModule = (list) => ({
//   type: 'TASK_ADD_MODULE',
//   payload: list
// })