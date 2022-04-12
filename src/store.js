import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAnonymousUserSolutionsReducers,
  getOneSolutionDetailsReducers,
  getUserProfileCardReducers,
} from "./redux";

const reducer = combineReducers({
  getAnonymousUserSolutions: getAnonymousUserSolutionsReducers,
  getUserProfileCard: getUserProfileCardReducers,
  getOneSolutionDetails: getOneSolutionDetailsReducers,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
