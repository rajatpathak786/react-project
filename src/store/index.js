import {createStore} from 'redux'
import reducer from '../reducers'
const initialState = {
  item : []
}
export const store = createStore(reducer, initialState)

// import { createStore } from "redux";
// import rotateReducer from "reducers/rotateReducer";
// function configureStore(state = { rotating: true }) {
//   return createStore(rotateReducer,state);
// }
// export default configureStore;