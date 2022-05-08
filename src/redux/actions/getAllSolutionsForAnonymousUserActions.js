import {
  GET_ANONYMOUS_USER_SOLUTIONS_FAIL,
  GET_ANONYMOUS_USER_SOLUTIONS_REQUEST,
  GET_ANONYMOUS_USER_SOLUTIONS_SUCCESS,
} from "..";
import { getAllSolutionsForAnonymousUserApi } from "../../apis";

export const getAllSolutionsForAnonymousUserActions =
  ({ page, email, sortbydate, source, tag, perfectsolution }) =>
  async (dispatch) => {
    try {
      dispatch(getAllSolutionsRequest());

      const data = await getAllSolutionsForAnonymousUserApi({
        page,
        email,
        sortbydate,
        source,
        tag,
        perfectsolution,
      });

      dispatch(getAllSolutionsSuccess(data));
    } catch (error) {
      let err = "";
      if (error.response.status === 404) {
        err = "There's no user found with given email";
      }
      dispatch(getAllSolutionsFail(err));
    }
  };

const getAllSolutionsRequest = () => {
  return { type: GET_ANONYMOUS_USER_SOLUTIONS_REQUEST };
};
const getAllSolutionsSuccess = (data) => {
  return { type: GET_ANONYMOUS_USER_SOLUTIONS_SUCCESS, payload: data };
};
const getAllSolutionsFail = (err) => {
  return {
    type: GET_ANONYMOUS_USER_SOLUTIONS_FAIL,
    payload: err,
  };
};
