import {
  GET_ONE_SOLUTION_DETAILS_FAIL,
  GET_ONE_SOLUTION_DETAILS_REQUEST,
  GET_ONE_SOLUTION_DETAILS_SUCCESS,
} from "../constants/getOneSolutionDetailsConstants";

export const getOneSolutionDetailsReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_ONE_SOLUTION_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case GET_ONE_SOLUTION_DETAILS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_ONE_SOLUTION_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
