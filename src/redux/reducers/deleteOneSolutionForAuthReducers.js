import {
  DELETE_ONE_SOLUTION_FOR_AUTH_FAIL,
  DELETE_ONE_SOLUTION_FOR_AUTH_REQUEST,
  DELETE_ONE_SOLUTION_FOR_AUTH_SUCCESS,
} from "../constants/deleteOneSolutionForAuthConstants";

export const deleteOneSolutionForAuthReducers = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ONE_SOLUTION_FOR_AUTH_REQUEST:
      return {
        loading: true,
        success: null,
      };
    case DELETE_ONE_SOLUTION_FOR_AUTH_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        success: true,
      };
    case DELETE_ONE_SOLUTION_FOR_AUTH_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};
