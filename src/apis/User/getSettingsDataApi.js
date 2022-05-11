import axios from "axios";

export const getSettingsDataApi = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/settings`,
    { withCredentials: true }
  );

  return data;
};
