import {
  GET_USER_PROFILE_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
} from "../constants/getUserProfileConstants";

export const getUserProfileReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_USER_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
