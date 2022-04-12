import axios from "axios";

export const getOneSolutionDetailsForAnonymousApi = async ({ solutionId }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/anonymous/solution/${solutionId}`
  );
  return data;
};
