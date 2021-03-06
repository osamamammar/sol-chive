import React, { useEffect } from "react";
import {
  Alert,
  ErrorMessage,
  FilterCards,
  Footer,
  HomeEmpty,
  Loader,
  Pagination,
  ProfileHeader,
  SolutionCard,
  SolutionCardsContainer,
} from "../../components";
import { MainContainer } from "./HomePage.styles";
import { useSelector, useDispatch } from "react-redux";
import { getAllSolutionsForAuthUserActions } from "../../redux";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const { loading, data, error } = useSelector(
    (state) => state.getAllSolutionsForAuthUser
  );

  const dispatch = useDispatch();

  const location = useLocation();
  const page = new URLSearchParams(location.search).get("page") || 1;
  const sortbydate =
    new URLSearchParams(location.search).get("sortbydate") || "";
  const source = new URLSearchParams(location.search).get("source") || "";
  const tag = new URLSearchParams(location.search).get("tag") || "";
  const perfectsolution =
    new URLSearchParams(location.search).get("perfectsolution") || "";

  useEffect(() => {
    dispatch(
      getAllSolutionsForAuthUserActions({
        page,
        sortbydate,
        source,
        tag,
        perfectsolution,
      })
    );
  }, [dispatch, page, sortbydate, source, tag, perfectsolution]);

  return (
    <>
      <ProfileHeader></ProfileHeader>
      <MainContainer>
        {location.state && location.state.success && (
          <Alert delay="2000">{location.state?.success}</Alert>
        )}
        {loading ? (
          <Loader height={"108px"}></Loader>
        ) : error && !error.code === 404 ? (
          <ErrorMessage>{error.message}</ErrorMessage>
        ) : (
          data && (
            <SolutionCardsContainer>
              <FilterCards
                title={"Library"}
                addNewBtn={true}
                homePage={true}
                data={data}
              ></FilterCards>
              <SolutionCard
                data={data}
                pathName={location.pathname}
              ></SolutionCard>
              <Pagination
                totalPages={data.totalPages}
                currentPage={data.pageNumber}
              ></Pagination>
            </SolutionCardsContainer>
          )
        )}
        {error && error.code === 404 && <HomeEmpty></HomeEmpty>}
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
