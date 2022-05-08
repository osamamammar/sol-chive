import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deleteOneSolutionForAuthReducers,
  getAllSolutionsForAnonymousUserReducers,
  getAllSolutionsForAuthUserReducers,
  getBasicInfoReducers,
  getOneSolutionDetailsForAnonymousReducers,
  getOneSolutionDetailsForAuthReducers,
  getUserProfileCardReducers,
  userLoginWithGoogleReducers,
} from "./redux";

const reducer = combineReducers({
  getAllSolutionsForAnonymousUser: getAllSolutionsForAnonymousUserReducers,
  getUserProfileCard: getUserProfileCardReducers,
  getOneSolutionDetailsForAnonymous: getOneSolutionDetailsForAnonymousReducers,
  userLoginWithGoogle: userLoginWithGoogleReducers,
  getAllSolutionsForAuthUser: getAllSolutionsForAuthUserReducers,
  getBasicInfo: getBasicInfoReducers,
  getOneSolutionDetailsForAuth: getOneSolutionDetailsForAuthReducers,
  deleteOneSolutionForAuth: deleteOneSolutionForAuthReducers,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
