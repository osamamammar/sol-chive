import {
  GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_FAIL,
  GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_REQUEST,
  GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_SUCCESS,
} from "../constants/getOneSolutionDetailsForAnonymousConstants";

export const getOneSolutionDetailsForAnonymousReducers = (
  state = {},
  action
) => {
  switch (action.type) {
    case GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_REQUEST:
      return {
        loading: true,
      };
    case GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
