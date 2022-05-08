export const cookieData = document.cookie.split("; ");

export const checkAuth = (cookieData) => {
  for (let i = 0; i < cookieData.length; i++) {
    if (cookieData[i].split("=")[0] === "isLoggedIn") {
      return cookieData[i].split("=")[1];
    }
  }
};
