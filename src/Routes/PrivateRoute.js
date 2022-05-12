import React from "react";
import { Navigate } from "react-router-dom";
import { checkAuth } from "../utils";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = checkAuth("isLoggedIn");

  return isLoggedIn ? children : <Navigate to="/" />;
};
