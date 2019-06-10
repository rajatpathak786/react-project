/**
 * The global state selectors
 */

// import { createSelector } from 'reselect';
// import { initialState } from '../reducers/index';
import { store } from '../store'

// const selectGlobal = state => state.global || initialState;

// const selectRouter = state => state.router;
const getEmpName = () => store.getState().name;
const getEmpEmail = () => store.getState().email;
const getEmpDetails = () => store.getState().listEmp;
const getEmpDetailsId = () => store.getState().items;
const getTaskName = () => store.getState().name;
const getTaskDetails = () => store.getState().listTask;
const getTaskDetailsId = () => store.getState().taskName;
const getModuleName = () => store.getState().name;
const getModuleDetails = () => store.getState().listModule;
const getModuleDetailsId = () => store.getState().name;
const getEmpTrainingId = () => store.getState().empId;
const getReviewerId = () => store.getState().reviewerId;
const getModuleId = () => store.getState().moduleId;
const getEmpTrainingDetails = () => store.getState().listTraining;
const getDrift = () => store.getState().drift;

export {
  getEmpName,
  getEmpEmail,
  getEmpDetails,
  getEmpDetailsId,
  getTaskName,
  getTaskDetails,
  getTaskDetailsId,
  getModuleName,
  getModuleDetails,
  getModuleDetailsId,
  getEmpTrainingId,
  getReviewerId,
  getModuleId,
  getEmpTrainingDetails,
  getDrift
}
// export const selectShoppingCartItems = createSelector(
//   getProducts,
//   getCartItemIds,
//   (products, itemIds) => itemIds.map(id => products[id])
// );

// const makeSelectCurrentUser = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.currentUser,
//   );

// const makeSelectLoading = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.loading,
//   );

// const makeSelectError = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.error,
//   );

// const makeSelectRepos = () =>
//   createSelector(
//     selectGlobal,
//     globalState => globalState.userData.repositories,
//   );

// const makeSelectLocation = () =>
//   createSelector(
//     selectRouter,
//     routerState => routerState.location,
//   );

// export {
//   selectGlobal,
//   makeSelectCurrentUser,
//   makeSelectLoading,
//   makeSelectError,
//   makeSelectRepos,
//   makeSelectLocation,
// };
