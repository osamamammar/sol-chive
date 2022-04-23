import axios from "axios";

export const userLogoutApi = async () => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_API_URL}/auth/logout`,
    { withCredentials: true }
  );
  return data;
};
