import axios from "axios";
import {
  GET_USER_PROFILE_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
} from "..";

export const getUserProfileActions =
  ({ email }) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_USER_PROFILE_REQUEST });
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/?email=${email}`
      );
      dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      let err = "";
      if (error.response.status === 404) {
        err = "404 not found, there's no user found with given email";
      } else if (error.response.status === 400) {
        err = "Somthing went wrong, please try again";
      } else {
      }
      err = error.response.data.message;
      dispatch({
        type: GET_USER_PROFILE_FAIL,
        payload: err,
      });
    }
  };
