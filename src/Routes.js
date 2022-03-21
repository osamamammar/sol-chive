import React from "react";
import { BrowserRouter, Route, Routes as RoutesApp } from "react-router-dom";
import { LandingPage, SearchResultPage } from "./screens";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesApp>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/search" element={<SearchResultPage />}></Route>
      </RoutesApp>
    </BrowserRouter>
  );
};

export default Routes;
