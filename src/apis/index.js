// AUTHENTICATION APIS
export { userLoginWithGoogleApi } from "./Authentication/userLoginWithGoogleApi";

//SOLUTIONS APIS
export { getAllSolutionsForAnonymousUserApi } from "./Solution/getAllSolutionsForAnonymousUserApi";
export { getAllSolutionsForAuthUserApi } from "./Solution/getAllSolutionsForAuthUserApi";
export { getOneSolutionDetailsForAnonymousApi } from "./Solution/getOneSolutionDetailsForAnonymousApi";
export { getOneSolutionDetailsForAuthApi } from "./Solution/getOneSolutionDetailsForAuthApi";
export { deleteOneSolutionForAuthApi } from "./Solution/deleteOneSolutionForAuthApi";
export { updateSolutionAuthApi } from "./Solution/updateSolutionAuthApi";
export { addNewSolutionAuthApi } from "./Solution/addNewSolutionAuthApi";

//USER APIS
export {
  getUserProfileCardApi,
  getAuthUserProfileCardApi,
} from "./User/getUserProfileCardApi";
export { getBasicInfoApi } from "./User/getBasicInfoApi";
export { getSettingsDataApi } from "./User/getSettingsDataApi";
export { updateSettingsDataApi } from "./User/updateSettingsDataApi";
export { updateAvatarApi } from "./User/updateAvatarApi";
