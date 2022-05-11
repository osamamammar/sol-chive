import axios from "axios";

export const updateSettingsDataApi = async () => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_API_URL}/user/settings`,
    { withCredentials: true }
  );

  return data;
};
