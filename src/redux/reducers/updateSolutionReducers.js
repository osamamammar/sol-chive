import {
  RESET_UPDATE_SOLUTION_ERROR,
  UPDATE_SOLUTION_FAIL,
  UPDATE_SOLUTION_REQUEST,
  UPDATE_SOLUTION_SUCCESS,
} from "../constants/updateSolutionConstants";

export const updateSolutionReducers = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SOLUTION_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_SOLUTION_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case UPDATE_SOLUTION_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case RESET_UPDATE_SOLUTION_ERROR:
      return {};
    default:
      return state;
  }
};
