export const employeeAdd = (state, action) => {
  switch (action.type) {
    case 'CREATE_EMPLOYEE': {
      return {
        ...state,
        ...action.payload
      }
    }
  }
}