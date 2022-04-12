import { getOneSolutionDetailsForAnonymousApi } from "../../apis";
import {
  GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_FAIL,
  GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_REQUEST,
  GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_SUCCESS,
} from "../constants/getOneSolutionDetailsForAnonymousConstants";

export const getOneSolutionDetailsForAnonymousActions =
  ({ solutionId }) =>
  async (dispatch) => {
    try {
      dispatch(getOneSolutionRequest());

      const data = await getOneSolutionDetailsForAnonymousApi({ solutionId });

      dispatch(getOneSolutionSuccess(data));
    } catch (error) {
      let err = "";
      err = error.response.data.message;
      dispatch(getOneSolutionFail(err));
    }
  };

const getOneSolutionRequest = () => {
  return { type: GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_REQUEST };
};
const getOneSolutionSuccess = (data) => {
  return {
    type: GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_SUCCESS,
    payload: data,
  };
};
const getOneSolutionFail = (err) => {
  return {
    type: GET_ONE_SOLUTION_DETAILS_FOR_ANONYMOUS_FAIL,
    payload: err,
  };
};
