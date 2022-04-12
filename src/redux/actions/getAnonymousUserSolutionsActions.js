import {
  GET_ANONYMOUS_USER_SOLUTIONS_FAIL,
  GET_ANONYMOUS_USER_SOLUTIONS_REQUEST,
  GET_ANONYMOUS_USER_SOLUTIONS_SUCCESS,
} from "..";
import { getAnonymousUserSolutionsApi } from "../../services";

export const getAnonymousUserSolutionsActions =
  ({ email }) =>
  async (dispatch) => {
    try {
      dispatch(getAnonymousUserSolutionsRequest());

      const data = await getAnonymousUserSolutionsApi({ email });

      dispatch(getAnonymousUserSolutionsSuccess(data));
    } catch (error) {
      let err = "";
      if (error.response.status === 404) {
        err = "404 not found, there's no user found with given email";
      }
      // err = error.response.data.message;
      dispatch(getAnonymousUserSolutionsFail(err));
    }
  };

const getAnonymousUserSolutionsRequest = () => {
  return { type: GET_ANONYMOUS_USER_SOLUTIONS_REQUEST };
};
const getAnonymousUserSolutionsSuccess = (data) => {
  return { type: GET_ANONYMOUS_USER_SOLUTIONS_SUCCESS, payload: data };
};
const getAnonymousUserSolutionsFail = (err) => {
  return {
    type: GET_ANONYMOUS_USER_SOLUTIONS_FAIL,
    payload: err,
  };
};
