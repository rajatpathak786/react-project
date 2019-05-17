export const employeeEdit = (state, action) => {
  switch (action.type) {  
    case 'EDIT_EMPLOYEE': {
      return {
        ...state,
        ...action.payload
      }
    }
  }
}