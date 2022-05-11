import {
  getSettingsDataApi,
  updateAvatarApi,
  updateSettingsDataApi,
} from "../../apis";
import {
  GET_SETTING_FAIL,
  GET_SETTING_REQUEST,
  GET_SETTING_SUCCESS,
  UPDATE_AVATAR_FAIL,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_SETTING_FAIL,
  UPDATE_SETTING_REQUEST,
  UPDATE_SETTING_SUCCESS,
} from "../constants/settingsDataConstants";

export const getSettingsActions = () => async (dispatch) => {
  try {
    dispatch(getSettingsRequest());
    const data = await getSettingsDataApi();

    dispatch(getSettingsSuccess(data));
  } catch (error) {
    let err = "";
    err = error.response.data.message;
    dispatch(getSettingsFail(err));
  }
};

const getSettingsRequest = () => {
  return { type: GET_SETTING_REQUEST };
};

const getSettingsSuccess = (data) => {
  return { type: GET_SETTING_SUCCESS, payload: data };
};
const getSettingsFail = (err) => {
  return {
    type: GET_SETTING_FAIL,
    payload: err,
  };
};

export const updateSettingsActions = () => async (dispatch) => {
  try {
    dispatch(updateSettingsRequest());
    const data = await updateSettingsDataApi();

    dispatch(updateSettingsSuccess(data));
  } catch (error) {
    let err = "";
    err = error.response.data.message;
    dispatch(updateSettingsFail(err));
  }
};

const updateSettingsRequest = () => {
  return { type: UPDATE_SETTING_REQUEST };
};

const updateSettingsSuccess = (data) => {
  return { type: UPDATE_SETTING_SUCCESS, payload: data };
};
const updateSettingsFail = (err) => {
  return {
    type: UPDATE_SETTING_FAIL,
    payload: err,
  };
};

export const updateAvatarActions = () => async (dispatch) => {
  try {
    dispatch(updateAvatarRequest());
    const data = await updateAvatarApi();

    dispatch(updateAvatarSuccess(data));
  } catch (error) {
    let err = "";
    err = error.response.data.message;
    dispatch(updateAvatarFail(err));
  }
};

const updateAvatarRequest = () => {
  return { type: UPDATE_AVATAR_REQUEST };
};

const updateAvatarSuccess = (data) => {
  return { type: UPDATE_AVATAR_SUCCESS, payload: data };
};
const updateAvatarFail = (err) => {
  return {
    type: UPDATE_AVATAR_FAIL,
    payload: err,
  };
};
