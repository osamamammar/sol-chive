export const checkAuth = (cookieData) => {
  let name = cookieData + "=";
  let decoded_cookie = decodeURIComponent(document.cookie);
  let carr = decoded_cookie.split(";");
  for (let i = 0; i < carr.length; i++) {
    let c = carr[i];

    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length) === "true" ? true : false;
    }
  }
  return "";
};
