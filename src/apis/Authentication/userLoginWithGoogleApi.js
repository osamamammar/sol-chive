import axios from "axios";

export const userLoginWithGoogleApi = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/auth/google`,
    { withCredentials: true }
  );
  return data;
};
