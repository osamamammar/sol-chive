import axios from "axios";

export const getAllSolutionsForAuthUserApi = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/solutions`,
    { withCredentials: true }
  );
  return data;
};
