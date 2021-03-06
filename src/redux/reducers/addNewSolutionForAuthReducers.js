import {
  ADD_NEW_SOLUTION_FAIL,
  ADD_NEW_SOLUTION_REQUEST,
  ADD_NEW_SOLUTION_SUCCESS,
  RESET_ADD_NEW_SOLUTION_ERROR,
} from "../constants/addNewSolutionForAuthConstants";

export const addNewSolutionForAuthReducers = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_SOLUTION_REQUEST:
      return {
        loading: true,
        success: null,
      };
    case ADD_NEW_SOLUTION_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        success: true,
      };
    case ADD_NEW_SOLUTION_FAIL:
      return {
        loading: false,
        error: action.payload,
        success: false,
      };
    case RESET_ADD_NEW_SOLUTION_ERROR:
      return {};
    default:
      return state;
  }
};
