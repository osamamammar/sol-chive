import {
  GET_USER_PROFILE_CARD_FAIL,
  GET_USER_PROFILE_CARD_REQUEST,
  GET_USER_PROFILE_CARD_SUCCESS,
} from "..";
import { getUserProfileCardApi } from "../../apis";

export const getUserProfileCardActions =
  ({ email }) =>
  async (dispatch) => {
    try {
      dispatch(getUserProfileCardRequest());
      const data = await getUserProfileCardApi({ email });

      dispatch(getUserProfileCardSuccess(data));
    } catch (error) {
      let err = "";
      err = error.response.data.message;
      dispatch(getUserProfileCardFail(err));
    }
  };

const getUserProfileCardRequest = () => {
  return { type: GET_USER_PROFILE_CARD_REQUEST };
};

const getUserProfileCardSuccess = (data) => {
  return { type: GET_USER_PROFILE_CARD_SUCCESS, payload: data };
};
const getUserProfileCardFail = (err) => {
  return {
    type: GET_USER_PROFILE_CARD_FAIL,
    payload: err,
  };
};
