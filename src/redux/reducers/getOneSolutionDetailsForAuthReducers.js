import {
  GET_ONE_SOLUTION_DETAILS_FOR_AUTH_FAIL,
  GET_ONE_SOLUTION_DETAILS_FOR_AUTH_REQUEST,
  GET_ONE_SOLUTION_DETAILS_FOR_AUTH_SUCCESS,
} from "../constants/getOneSolutionDetailsForAuthConstants";

export const getOneSolutionDetailsForAuthReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_ONE_SOLUTION_DETAILS_FOR_AUTH_REQUEST:
      return {
        loading: true,
      };
    case GET_ONE_SOLUTION_DETAILS_FOR_AUTH_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_ONE_SOLUTION_DETAILS_FOR_AUTH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
