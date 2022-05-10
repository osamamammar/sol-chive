import axios from "axios";

export const updateSolutionAuthApi = async ({ solutionId }) => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_API_URL}/user/solutions/${solutionId}`,
    { withCredentials: true }
  );
  return data;
};
