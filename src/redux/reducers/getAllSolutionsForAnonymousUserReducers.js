import {
  GET_ANONYMOUS_USER_SOLUTIONS_FAIL,
  GET_ANONYMOUS_USER_SOLUTIONS_REQUEST,
  GET_ANONYMOUS_USER_SOLUTIONS_SUCCESS,
} from "../constants/getAllSolutionsForAnonymousUserConstants";

export const getAllSolutionsForAnonymousUserReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_ANONYMOUS_USER_SOLUTIONS_REQUEST:
      return {
        loading: true,
      };
    case GET_ANONYMOUS_USER_SOLUTIONS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_ANONYMOUS_USER_SOLUTIONS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
