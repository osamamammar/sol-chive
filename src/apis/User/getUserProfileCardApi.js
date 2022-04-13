import axios from "axios";

export const getUserProfileCardApi = async ({ email }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/?email=${email}`
  );
  return data;
};
