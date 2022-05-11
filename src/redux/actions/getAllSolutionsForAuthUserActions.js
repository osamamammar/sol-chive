import { getAllSolutionsForAuthUserApi } from "../../apis";
import {
  GET_ALL_SOLUTIONS_FOR_AUTH_USER_FAIL,
  GET_ALL_SOLUTIONS_FOR_AUTH_USER_REQUEST,
  GET_ALL_SOLUTIONS_FOR_AUTH_USER_SUCCESS,
} from "../constants/getAllSolutionsForAuthUserConstants";

export const getAllSolutionsForAuthUserActions =
  ({ page, sortbydate, source, tag, perfectsolution }) =>
  async (dispatch) => {
    try {
      dispatch(getAllSolutionsRequest());

      const data = await getAllSolutionsForAuthUserApi({
        page,
        sortbydate,
        source,
        tag,
        perfectsolution,
      });

      dispatch(getAllSolutionsSuccess(data));
    } catch (error) {
      let err = "";
      err = error.response.data;
      dispatch(getAllSolutionsFail(err));
    }
  };

const getAllSolutionsRequest = () => {
  return { type: GET_ALL_SOLUTIONS_FOR_AUTH_USER_REQUEST };
};
const getAllSolutionsSuccess = (data) => {
  return {
    type: GET_ALL_SOLUTIONS_FOR_AUTH_USER_SUCCESS,
    payload: data,
  };
};
const getAllSolutionsFail = (err) => {
  return {
    type: GET_ALL_SOLUTIONS_FOR_AUTH_USER_FAIL,
    payload: err,
  };
};
