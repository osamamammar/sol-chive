import { addNewSolutionAuthApi } from "../../apis";
import {
  ADD_NEW_SOLUTION_FAIL,
  ADD_NEW_SOLUTION_REQUEST,
  ADD_NEW_SOLUTION_SUCCESS,
} from "../constants/addNewSolutionForAuthConstants";

export const addNewSolutionForAuthActions =
  ({
    problemTitle,
    problemLink,
    tags,
    yourSolution,
    perfectSolution,
    navigate,
  }) =>
  async (dispatch) => {
    try {
      dispatch(addSolutionRequest());

      const data = await addNewSolutionAuthApi({
        problemTitle,
        problemLink,
        tags,
        yourSolution,
        perfectSolution,
      });
      dispatch(addSolutionSuccess(data));
      navigate(`/solution/${problemTitle}/${data.solutionId}`, {
        replace: true,
        state: { success: "Solution added successfully" },
      });
      window.scrollTo(0, 0);
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
