import { addNewSolutionForAuthApi } from "../../apis";
import {
  ADD_NEW_SOLUTION_FAIL,
  ADD_NEW_SOLUTION_REQUEST,
  ADD_NEW_SOLUTION_SUCCESS,
} from "../constants/addNewSolutionForAuthConstants";

export const addNewSolutionForAuthActions =
  ({ problemTitle, problemLink, tags, yourSolution, perfectSolution }) =>
  async (dispatch) => {
    try {
      dispatch(addSolutionRequest());

      const data = await addNewSolutionForAuthApi({
        problemTitle,
        problemLink,
        tags,
        yourSolution,
        perfectSolution,
      });
      dispatch(addSolutionSuccess(data));
    } catch (error) {
      let err = "";
      err = error.response.data.message;
      dispatch(addSolutionFail(err));
    }
  };

const addSolutionRequest = () => {
  return { type: ADD_NEW_SOLUTION_REQUEST };
};

const addSolutionSuccess = (data) => {
  return { type: ADD_NEW_SOLUTION_SUCCESS, payload: data };
};
const addSolutionFail = (err) => {
  return {
    type: ADD_NEW_SOLUTION_FAIL,
    payload: err,
  };
};
