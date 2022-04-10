import {
  GET_ANONYMOUS_USER_SOLUTIONS_FAIL,
  GET_ANONYMOUS_USER_SOLUTIONS_REQUEST,
  GET_ANONYMOUS_USER_SOLUTIONS_SUCCESS,
} from "../constants/getAnonymousUserSolutionsConstants";

export const getAnonymousUserSolutionsReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_ANONYMOUS_USER_SOLUTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ANONYMOUS_USER_SOLUTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_ANONYMOUS_USER_SOLUTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
