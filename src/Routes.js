import React from "react";
import { BrowserRouter, Route, Routes as RoutesApp } from "react-router-dom";
import { LandingPage } from "./screens";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesApp>
        <Route path="/" element={<LandingPage />}></Route>
      </RoutesApp>
    </BrowserRouter>
  );
};

export default Routes;
