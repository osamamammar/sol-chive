import React, { useEffect } from "react";
import {
  ErrorMessage,
  FilterCards,
  Footer,
  HomeEmpty,
  Loader,
  ProfileHeader,
  SolutionCard,
  SolutionCardsContainer,
} from "../../components";
import { MainContainer } from "./HomePage.styles";
import { useSelector, useDispatch } from "react-redux";
import { getAllSolutionsForAuthUserActions } from "../../redux";

const HomePage = () => {
  const { loading, data, error } = useSelector(
    (state) => state.getAllSolutionsForAuthUser
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSolutionsForAuthUserActions());
  }, [dispatch]);

  return (
    <>
      <ProfileHeader></ProfileHeader>
      <MainContainer>
        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <ErrorMessage>{error}</ErrorMessage>
        ) : (
          data && (
            <SolutionCardsContainer>
              <FilterCards
                title={"Library"}
                addNewBtn={true}
                homePage={true}
                data={data}
              ></FilterCards>
              <SolutionCard data={data}></SolutionCard>
            </SolutionCardsContainer>
          )
        )}
        {data && data.solutions.length === 0 && <HomeEmpty></HomeEmpty>}
      </MainContainer>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
