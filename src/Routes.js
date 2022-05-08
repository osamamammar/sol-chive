import React from "react";
import { BrowserRouter, Route, Routes as RoutesApp } from "react-router-dom";
import {
  AddNewProblemPage,
  EditInfoPage,
  HomePage,
  LandingPage,
  NotFoundPage,
  ProfilePage,
  SearchResultPage,
  ViewSolutionPage,
} from "./screens";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesApp>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/search/:email" element={<SearchResultPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/add-new-problem" element={<AddNewProblemPage />}></Route>
        <Route path="/edit-problem" element={<AddNewProblemPage />}></Route>
        <Route
          path="/solution/:title/:solutionId"
          element={<ViewSolutionPage />}
        ></Route>
        <Route path="/edit-info" element={<EditInfoPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </RoutesApp>
    </BrowserRouter>
  );
};

export default Routes;
