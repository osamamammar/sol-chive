import axios from "axios";

export const getAnonymousUserSolutionsApi = async ({ email }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/anonymous/solutions/${email}`
  );
  return data;
};
