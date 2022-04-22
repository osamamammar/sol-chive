import {
  GET_ALL_SOLUTIONS_FOR_AUTH_USER_FAIL,
  GET_ALL_SOLUTIONS_FOR_AUTH_USER_REQUEST,
  GET_ALL_SOLUTIONS_FOR_AUTH_USER_SUCCESS,
} from "../constants/getAllSolutionsForAuthUserConstants";

export const getAllSolutionsForAuthUserReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_SOLUTIONS_FOR_AUTH_USER_REQUEST:
      return {
        loading: true,
      };
    case GET_ALL_SOLUTIONS_FOR_AUTH_USER_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_ALL_SOLUTIONS_FOR_AUTH_USER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
