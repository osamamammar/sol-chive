import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addNewSolutionForAuthReducers,
  deleteOneSolutionForAuthReducers,
  getAllSolutionsForAnonymousUserReducers,
  getAllSolutionsForAuthUserReducers,
  getAuthUserProfileCardReducers,
  getBasicInfoReducers,
  getOneSolutionDetailsForAnonymousReducers,
  getOneSolutionDetailsForAuthReducers,
  getSettingsReducers,
  getUserProfileCardReducers,
  updateAvatarReducers,
  updateSolutionReducers,
  userLoginWithGoogleReducers,
} from "./redux";

const reducer = combineReducers({
  getAllSolutionsForAnonymousUser: getAllSolutionsForAnonymousUserReducers,
  getUserProfileCard: getUserProfileCardReducers,
  getAuthUserProfileCard: getAuthUserProfileCardReducers,
  getOneSolutionDetailsForAnonymous: getOneSolutionDetailsForAnonymousReducers,
  userLoginWithGoogle: userLoginWithGoogleReducers,
  getAllSolutionsForAuthUser: getAllSolutionsForAuthUserReducers,
  getBasicInfo: getBasicInfoReducers,
  getOneSolutionDetailsForAuth: getOneSolutionDetailsForAuthReducers,
  deleteOneSolutionForAuth: deleteOneSolutionForAuthReducers,
  addNewSolutionForAuth: addNewSolutionForAuthReducers,
  updateSolution: updateSolutionReducers,
  settingsData: getSettingsReducers,
  updateAvatar: updateAvatarReducers,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
