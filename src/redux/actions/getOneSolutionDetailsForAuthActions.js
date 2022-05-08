import { getOneSolutionDetailsForAuthApi } from "../../apis";
import {
  GET_ONE_SOLUTION_DETAILS_FOR_AUTH_FAIL,
  GET_ONE_SOLUTION_DETAILS_FOR_AUTH_REQUEST,
  GET_ONE_SOLUTION_DETAILS_FOR_AUTH_SUCCESS,
} from "../constants/getOneSolutionDetailsForAuthConstants";

export const getOneSolutionDetailsForAuthActions =
  ({ solutionId }) =>
  async (dispatch) => {
    try {
      dispatch(getOneSolutionRequest());

      const data = await getOneSolutionDetailsForAuthApi({ solutionId });

      dispatch(getOneSolutionSuccess(data));
    } catch (error) {
      let err = "";
      err = error.response.data.message;
      dispatch(getOneSolutionFail(err));
    }
  };

const getOneSolutionRequest = () => {
  return { type: GET_ONE_SOLUTION_DETAILS_FOR_AUTH_REQUEST };
};
const getOneSolutionSuccess = (data) => {
  return {
    type: GET_ONE_SOLUTION_DETAILS_FOR_AUTH_SUCCESS,
    payload: data,
  };
};
const getOneSolutionFail = (err) => {
  return {
    type: GET_ONE_SOLUTION_DETAILS_FOR_AUTH_FAIL,
    payload: err,
  };
};
