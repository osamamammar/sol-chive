import axios from "axios";

export const updateSolutionAuthApi = async ({
  solutionId,
  problemTitle,
  problemLink,
  tags,
  yourSolution,
  perfectSolution,
}) => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_API_URL}/user/solutions/${solutionId}`,
    {
      title: problemTitle,
      link: problemLink,
      tags: tags,
      mySolution: yourSolution,
      perfectSolution: perfectSolution,
    }
    // { withCredentials: true }
  );
  return data;
};
