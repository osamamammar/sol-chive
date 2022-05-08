import axios from "axios";

export const getOneSolutionDetailsForAuthUserApi = async ({ solutionId }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/solutions/${solutionId}`
  );
  return data;
};
