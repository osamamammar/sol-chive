import axios from "axios";

export const getAllSolutionsForAnonymousUserApi = async ({
  email,
  page,
  sortbydate,
  source,
  tag,
  perfectsolution,
}) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/anonymous/solutions/${email}?${
      page ? `page=${page}` : `page=1`
    }&${sortbydate ? `sortbydate=${sortbydate}` : ""}&${
      source ? `source=${source}` : ""
    }&${tag ? `tag=${tag}` : ""}&${
      perfectsolution ? `perfectsolution=${perfectsolution}` : ""
    }`
  );
  return data;
};
