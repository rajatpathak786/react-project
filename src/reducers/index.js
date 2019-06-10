
// import { combineReducers } from 'redux'
// import employeeAdd from './employeeAdd'
// import employeeEdit from './employeeEdit'
// import employeeDetails from './employeeDetails'

// const reducer = combineReducers({
//   employeeAdd,
//   employeeEdit,
//   employeeDetails 
// })
// export default reducer;
import produce from 'immer'

export const initialState = {
  item : [],
  // list : [],
  // edit : [],
  open : [false]
  // task : [],
  // modules : [],
  // tasks : [],
  // taskName : []
}

export const reducer = produce((state, action) => {
  switch (action.type) {
    case 'CREATE_EMPLOYEE': 
      return {
        ...state,
        ...action.payload
      }
    
    case 'EMPLOYEE_DETAILS': 
      return {
        ...state, 
        ...action.payload,
        listEmp: [action.payload]
      }
    
    case 'TASK_DETAILS': 
    return {
      ...state, 
      ...action.payload,
      listTask: [action.payload]
    }  
       
    case 'EDIT_EMPLOYEE': 
      return {
        ...state, 
        ...action.payload,
        edit: [action.payload]
      }

    case 'EDIT_EMPLOYEE_EMP': 
      return {
        ...state, 
        ...action.payload,
        list: [action.payload]
      }  

    case 'APP_MENU': 
      return {
        ...state,
        ...action.payload,
        open: [action.payload]
      }  

    case 'ADD_TASKS':
      return {
        ...state,
        ...action.payload,
        tasks: [action.payload]
      }

      case 'EDIT_TASKS':
      return {
        ...state,
        ...action.payload,
        edit: [action.payload]
      }
      
      case 'ADD_MODULES':
      return {
        ...state,
        ...action.payload,
        modules: [action.payload]
      }
      
      case 'MODULE_DETAILS':
      return {
        ...state,
        ...action.payload,
        listModule: [action.payload]
      }

      case 'TASK_SELECT':
      return {
        ...state,
        ...action.payload,
        task: [action.payload]
      }

      case 'MODULE_NAME_UPDATE':
      return {
        ...state,
        ...action.payload,
        taskName: [action.payload]
      }

      case 'ADD_EMPLOYEE_TRAINING':
      return {
        ...state,
        ...action.payload
      }

      case 'EMPLOYEE_TRAINING_DETAILS':
      return {
        ...state,
        ...action.payload,
        listTraining: [action.payload]
      }

      case 'ADD_DRIFT':
      return {
        ...state,
        ...action.payload,
        drift: [action.payload]
      }

      // case 'TASK_ADD_MODULE':
      // return {
      //   ...state,
      //   ...action.payload
      // }
  }  
})
// const employeeDetails = (state, action) => {
//   switch (action.type) {
//     case 'EMPLOYEE_DETAILS': 
//       return [...state, ...action.payload]
//       default: 
//        return state
//   }
// }
// const employeeEdit = (state, action) => {
//   switch (action.type) {  
//     case 'EDIT_EMPLOYEE': 
//       return [...state, ...action.payload]
//       default: 
//         return state
//   }
// }
