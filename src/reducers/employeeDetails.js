export const employeeDetails = (state, action) => {
  switch (action.type) {
    case 'EMPLOYEE_DETAILS': {
      return {
        ...state,
        ...action.payload
      }
    }
  }
}