import { deleteOneSolutionForAuthApi } from "../../apis";
import {
  DELETE_ONE_SOLUTION_FOR_AUTH_REQUEST,
  DELETE_ONE_SOLUTION_FOR_AUTH_SUCCESS,
  DELETE_ONE_SOLUTION_FOR_AUTH_FAIL,
} from "../constants/deleteOneSolutionForAuthConstants";

export const deleteOneSolutionForAuthActions =
  ({ solutionId }) =>
  async (dispatch) => {
    try {
      dispatch(deleteOneSolutionRequest());

      const data = await deleteOneSolutionForAuthApi({ solutionId });

      dispatch(deleteOneSolutionSuccess(data));
    } catch (error) {
      let err = "";
      err = error.response.data;
      dispatch(deleteOneSolutionFail(err));
    }
  };

const deleteOneSolutionRequest = () => {
  return { type: DELETE_ONE_SOLUTION_FOR_AUTH_REQUEST };
};
const deleteOneSolutionSuccess = (data) => {
  return {
    type: DELETE_ONE_SOLUTION_FOR_AUTH_SUCCESS,
    payload: data,
  };
};
const deleteOneSolutionFail = (err) => {
  return {
    type: DELETE_ONE_SOLUTION_FOR_AUTH_FAIL,
    payload: err,
  };
};
