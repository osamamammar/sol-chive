import { updateSolutionAuthApi } from "../../apis";
import {
  UPDATE_SOLUTION_FAIL,
  UPDATE_SOLUTION_REQUEST,
  UPDATE_SOLUTION_SUCCESS,
} from "../constants/updateSolutionConstants";

export const updateSolutionActions =
  ({
    solutionId,
    navigate,
    problemTitle,
    problemLink,
    tags,
    yourSolution,
    perfectSolution,
  }) =>
  async (dispatch) => {
    try {
      dispatch(updateSolutionRequest());

      const data = await updateSolutionAuthApi({
        solutionId,
        problemTitle,
        problemLink,
        tags,
        yourSolution,
        perfectSolution,
      });
      dispatch(updateSolutionSuccess(data));
      navigate(`/solution/${problemTitle}/${solutionId}`, {
        replace: true,
        state: { success: "Solution updated successfully" },
      });
      window.scrollTo(0, 0);
    } catch (error) {
      let err = "";
      err = error.response.data.message;
      dispatch(updateSolutionFail(err));
    }
  };

const updateSolutionRequest = () => {
  return { type: UPDATE_SOLUTION_REQUEST };
};

const updateSolutionSuccess = (data) => {
  return { type: UPDATE_SOLUTION_SUCCESS, payload: data };
};
const updateSolutionFail = (err) => {
  return {
    type: UPDATE_SOLUTION_FAIL,
    payload: err,
  };
};
