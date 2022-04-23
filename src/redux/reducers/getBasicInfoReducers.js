import {
  GET_BASIC_INFO_FAIL,
  GET_BASIC_INFO_REQUEST,
  GET_BASIC_INFO_SUCCESS,
} from "../constants/getBasicInfoConstants";

export const getBasicInfoReducers = (state = {}, action) => {
  switch (action.type) {
    case GET_BASIC_INFO_REQUEST:
      return {
        loading: true,
      };
    case GET_BASIC_INFO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_BASIC_INFO_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
