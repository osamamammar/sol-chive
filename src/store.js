import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAllSolutionsForAuthUserReducers,
  getAnonymousUserSolutionsReducers,
  getBasicInfoReducers,
  getOneSolutionDetailsForAnonymousReducers,
  getUserProfileCardReducers,
  userLoginWithGoogleReducers,
} from "./redux";

const reducer = combineReducers({
  getAnonymousUserSolutions: getAnonymousUserSolutionsReducers,
  getUserProfileCard: getUserProfileCardReducers,
  getOneSolutionDetailsForAnonymous: getOneSolutionDetailsForAnonymousReducers,
  userLoginWithGoogle: userLoginWithGoogleReducers,
  getAllSolutionsForAuthUser: getAllSolutionsForAuthUserReducers,
  getBasicInfo: getBasicInfoReducers,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
