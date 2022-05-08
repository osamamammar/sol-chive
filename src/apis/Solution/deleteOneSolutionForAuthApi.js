import axios from "axios";

export const deleteOneSolutionForAuthApi = async ({ solutionId }) => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_API_URL}/user/solutions/${solutionId}`,
    { withCredentials: true }
  );
  return data;
};
