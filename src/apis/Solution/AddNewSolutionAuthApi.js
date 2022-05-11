import axios from "axios";

export const addNewSolutionAuthApi = async ({
  problemTitle,
  problemLink,
  tags,
  yourSolution,
  perfectSolution,
}) => {
  if (perfectSolution === "") {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/solutions`,
      {
        title: problemTitle,
        link: problemLink,
        tags: tags,
        mySolution: yourSolution,
      },
      { withCredentials: true }
    );
    return data;
  } else {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/solutions`,
      {
        title: problemTitle,
        link: problemLink,
        tags: tags,
        mySolution: yourSolution,
        perfectSolution: perfectSolution,
      },
      { withCredentials: true }
    );
    return data;
  }
};
