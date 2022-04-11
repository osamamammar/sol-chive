import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getAnonymousUserSolutionsReducers,
  getUserProfileReducers,
} from "./redux";

const reducer = combineReducers({
  getAnonymousUserSolutions: getAnonymousUserSolutionsReducers,
  getUserProfile: getUserProfileReducers,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
