export const createEmployee = ( item ) => ({
  type: 'CREATE_EMPLOYEE',
  payload: item 
})
export const editEmployee = ( item ) => ({
  type: 'EDIT_EMPLOYEE',
  payload: item 
})
export const employeeDetails = ( item ) => ({
  type: 'EMPLOYEE_DETAILS', 
  payload: item 
})