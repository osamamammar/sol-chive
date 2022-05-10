// AUTHENTICATION APIS
export { userLoginWithGoogleApi } from "./Authentication/userLoginWithGoogleApi";

//SOLUTIONS APIS
export { getAllSolutionsForAnonymousUserApi } from "./Solution/getAllSolutionsForAnonymousUserApi";
export { getAllSolutionsForAuthUserApi } from "./Solution/getAllSolutionsForAuthUserApi";
export { getOneSolutionDetailsForAnonymousApi } from "./Solution/getOneSolutionDetailsForAnonymousApi";
export { getOneSolutionDetailsForAuthApi } from "./Solution/getOneSolutionDetailsForAuthApi";
export { deleteOneSolutionForAuthApi } from "./Solution/deleteOneSolutionForAuthApi";
export { addNewSolutionForAuthApi } from "./Solution/addNewSolutionForAuthApi";
export { updateOneSolutionForAuthApi } from "./Solution/updateOneSolutionForAuthApi";

//USER APIS
export { getUserProfileCardApi } from "./User/getUserProfileCardApi";
export { getBasicInfoApi } from "./User/getBasicInfoApi";
