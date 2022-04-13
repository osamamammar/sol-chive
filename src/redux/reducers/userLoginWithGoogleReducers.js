import {
  USER_LOGIN_WITH_GOOGLE_FAIL,
  USER_LOGIN_WITH_GOOGLE_REQUEST,
  USER_LOGIN_WITH_GOOGLE_SUCCESS,
  USER_LOGOUT,
} from "../constants/userLoginWithGoogleConstants";

export const userLoginWithGoogleReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_WITH_GOOGLE_REQUEST:
      return { loading: true };
    case USER_LOGIN_WITH_GOOGLE_SUCCESS:
      return { loading: false, data: action.payload };
    case USER_LOGIN_WITH_GOOGLE_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
