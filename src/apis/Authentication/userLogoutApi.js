import axios from "axios";

export const userLogoutApi = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/auth/logout`,
    { withCredentials: true }
  );
  return data;
};
