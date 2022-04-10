import axios from "axios";
import {
  GET_ANONYMOUS_USER_SOLUTIONS_FAIL,
  GET_ANONYMOUS_USER_SOLUTIONS_REQUEST,
  GET_ANONYMOUS_USER_SOLUTIONS_SUCCESS,
} from "../../redux";

export const getAnonymousUserSolutionsActions =
  ({ email }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ANONYMOUS_USER_SOLUTIONS_REQUEST });
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/anonymous/solutions/${email}`
      );
      dispatch({ type: GET_ANONYMOUS_USER_SOLUTIONS_SUCCESS, payload: data });
    } catch (error) {
      let err = "";
      if (error.response.status === 404) {
        err =
          "sorry there is no such a user.. check that you wrote the correct email";
      } else if (error.response.status === 400) {
        err = "bad request";
      } else {
        err = error.response.data.message;
      }
      dispatch({
        type: GET_ANONYMOUS_USER_SOLUTIONS_FAIL,
        payload: err,
      });
    }
  };
