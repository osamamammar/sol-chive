import React from "react";
import { BrowserRouter, Route, Routes as RoutesApp } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  NotFoundPage,
  ProfilePage,
  SearchResultPage,
} from "./screens";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesApp>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/search" element={<SearchResultPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </RoutesApp>
    </BrowserRouter>
  );
};

export default Routes;
