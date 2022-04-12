import {
  GET_USER_PROFILE_CARD_FAIL,
  GET_USER_PROFILE_CARD_REQUEST,
  GET_USER_PROFILE_CARD_SUCCESS,
} from "../constants/getUserProfileCardConstants";

export const getUserProfileCardReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_CARD_REQUEST:
      return {
        loading: true,
      };
    case GET_USER_PROFILE_CARD_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_USER_PROFILE_CARD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
