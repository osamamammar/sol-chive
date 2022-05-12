import React from "react";
import { BrowserRouter, Route, Routes as RoutesApp } from "react-router-dom";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { PublicRoute } from "./Routes/PublicRoute";
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
        <Route
          path="/"
          element={
            <PublicRoute restricted={true}>
              <LandingPage />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/search/:email"
          element={
            <PublicRoute restricted={true}>
              <SearchResultPage />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/add-new-problem"
          element={
            <PrivateRoute>
              <AddNewProblemPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/edit-problem"
          element={
            <PrivateRoute>
              <AddNewProblemPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/solution/:title/:solutionId"
          element={
            <PublicRoute restricted={false}>
              <ViewSolutionPage />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/edit-info"
          element={
            <PrivateRoute>
              <EditInfoPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="*"
          element={
            <PublicRoute restricted={false}>
              <NotFoundPage />
            </PublicRoute>
          }
        ></Route>
      </RoutesApp>
    </BrowserRouter>
  );
};

export default Routes;
