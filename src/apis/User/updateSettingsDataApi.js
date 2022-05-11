import axios from "axios";

export const updateSettingsDataApi = async ({ name, about, contacts }) => {
  if (about === "" && contacts === "") {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/settings`,
      {
        name,
      },
      { withCredentials: true }
    );

    return data;
  } else if (about === "") {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/settings`,
      {
        name,
        contacts,
      },
      { withCredentials: true }
    );

    return data;
  } else if (contacts === "") {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/settings`,
      {
        name,
        about,
      },
      { withCredentials: true }
    );
    return data;
  } else {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/settings`,
      {
        name,
        about,
        contacts,
      },
      { withCredentials: true }
    );
    return data;
  }
};
