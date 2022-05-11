import axios from "axios";

export const updateSettingsDataApi = async ({ name, about, contacts }) => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_API_URL}/user/settings`,
    { name: name, about: about, contacts: contacts },
    { withCredentials: true }
  );

  return data;
};
