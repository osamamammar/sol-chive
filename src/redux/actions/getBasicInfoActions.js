import { getBasicInfoApi } from "../../apis";
import {
  GET_BASIC_INFO_FAIL,
  GET_BASIC_INFO_REQUEST,
  GET_BASIC_INFO_SUCCESS,
} from "../constants/getBasicInfoConstants";

export const getBasicInfoActions = () => async (dispatch) => {
  try {
    dispatch(getBasicInfoRequest());

    const data = await getBasicInfoApi();

    dispatch(getBasicInfoSuccess(data));
  } catch (error) {
    let err = "";

    err = error.response.data.message;
    dispatch(getBasicInfoFail(err));
  }
};

const getBasicInfoRequest = () => {
  return {
    TYPE: GET_BASIC_INFO_REQUEST,
  };
};
const getBasicInfoSuccess = (data) => {
  return {
    type: GET_BASIC_INFO_SUCCESS,
    payload: data,
  };
};
const getBasicInfoFail = (err) => {
  return {
    type: GET_BASIC_INFO_FAIL,
    payload: err,
  };
};
