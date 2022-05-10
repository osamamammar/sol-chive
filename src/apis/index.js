// AUTHENTICATION APIS
export { userLoginWithGoogleApi } from "./Authentication/userLoginWithGoogleApi";

//SOLUTIONS APIS
export { getAllSolutionsForAnonymousUserApi } from "./Solution/getAllSolutionsForAnonymousUserApi";
export { getAllSolutionsForAuthUserApi } from "./Solution/getAllSolutionsForAuthUserApi";
export { getOneSolutionDetailsForAnonymousApi } from "./Solution/getOneSolutionDetailsForAnonymousApi";
export { getOneSolutionDetailsForAuthApi } from "./Solution/getOneSolutionDetailsForAuthApi";
export { deleteOneSolutionForAuthApi } from "./Solution/deleteOneSolutionForAuthApi";
export { addNewSolutionAuthApi } from "./Solution/addNewSolutionAuthApi";
export { updateSolutionAuthApi } from "./Solution/updateSolutionAuthApi";

//USER APIS
export { getUserProfileCardApi } from "./User/getUserProfileCardApi";
export { getBasicInfoApi } from "./User/getBasicInfoApi";
