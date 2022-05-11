import axios from "axios";

export const updateAvatarApi = async () => {
  const { data } = await axios.patch(
    `${process.env.REACT_APP_API_URL}/user/update-avatar`,
    { withCredentials: true }
  );

  return data;
};
