import axios from "axios";

export const AddNewSolutionAuthApi = async () => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/solutions`,
    { withCredentials: true }
  );
  return data;
};
