import axios from "axios";

export const getAllSolutionsForAuthUserApi = async ({
  page,
  sortbydate,
  source,
  tag,
  perfectsolution,
}) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/solutions?${
      page ? `page=${page}` : `page=1`
    }&${sortbydate ? `sortbydate=${sortbydate}` : ""}&${
      source ? `source=${source}` : ""
    }&${tag ? `tag=${tag}` : ""}&${
      perfectsolution ? `perfectsolution=${perfectsolution}` : ""
    }`,
    { withCredentials: true }
  );
  return data;
};
