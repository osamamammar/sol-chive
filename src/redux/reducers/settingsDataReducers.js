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

export const getSettingsReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_SETTING_REQUEST:
      return {
        loading: true,
      };
    case GET_SETTING_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_SETTING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateSettingsReducers = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SETTING_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_SETTING_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case UPDATE_SETTING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateAvatarReducers = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_AVATAR_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_AVATAR_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case UPDATE_AVATAR_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
