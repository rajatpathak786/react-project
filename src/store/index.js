import {createStore} from 'redux'
// import {employeeAdd, employeeDetails, employeeEdit} from '../reducers'
import {reducer, initialState} from '../reducers'

export const store = createStore(reducer, initialState)

// import { createStore } from "redux";
// import rotateReducer from "reducers/rotateReducer";
// function configureStore(state = { rotating: true }) {
//   return createStore(rotateReducer,state);
// }
// export default configureStore;