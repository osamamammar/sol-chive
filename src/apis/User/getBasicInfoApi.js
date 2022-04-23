import axios from "axios";

export const getBasicInfoApi = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/basic-info`,
    { withCredentials: true }
  );

  return data;
};
