import { userLoginWithGoogleApi } from "../../apis";
import {
  USER_LOGIN_WITH_GOOGLE_FAIL,
  USER_LOGIN_WITH_GOOGLE_REQUEST,
  USER_LOGIN_WITH_GOOGLE_SUCCESS,
} from "../constants/userLoginWithGoogleConstants";

export const userLoginWithGoogleActions = () => async (dispatch) => {
  try {
    dispatch(userLoginWithGoogleRequest());

    const data = await userLoginWithGoogleApi();
    dispatch(userLoginWithGoogleSuccess(data));
  } catch (error) {
    let err = "";
    err = error.response.data.message;
    dispatch(userLoginWithGoogleFail(err));
  }
};

const userLoginWithGoogleRequest = () => {
  return { type: USER_LOGIN_WITH_GOOGLE_REQUEST };
};

const userLoginWithGoogleSuccess = (data) => {
  return { type: USER_LOGIN_WITH_GOOGLE_SUCCESS, payload: data };
};
const userLoginWithGoogleFail = (err) => {
  return {
    type: USER_LOGIN_WITH_GOOGLE_FAIL,
    payload: err,
  };
};
