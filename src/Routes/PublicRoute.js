import React from "react";
import { Navigate } from "react-router-dom";
import { checkAuth } from "../utils";

export const PublicRoute = ({ children, restricted }) => {
  const isLoggedIn = checkAuth("isLoggedIn");

  return isLoggedIn && restricted ? <Navigate to="/home" /> : children;
};
