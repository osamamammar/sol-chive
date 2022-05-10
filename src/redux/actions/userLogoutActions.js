import { userLogoutApi } from "../../apis/Authentication/userLogoutApi";
import { USER_LOGOUT } from "../constants/userLoginWithGoogleConstants";

export const userLogoutActions =
  ({ navigate }) =>
  async (dispatch) => {
    try {
      const data = await userLogoutApi();

      dispatch(userLogoutSuccess(data));
      navigate("/");
    } catch (error) {
      let err = "";
      err = error.response.data.message;
      dispatch(userLogoutFail(err));
    }
  };

const userLogoutSuccess = (data) => {
  return { type: USER_LOGOUT, payload: data };
};

const userLogoutFail = (err) => {
  return { type: USER_LOGOUT, payload: err };
};
