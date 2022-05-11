import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { btnCancel, btnSubmit, refresh } from "../../assets";
import { CTABtn, EditInfoForm, Footer, ProfileHeader } from "../../components";
import { getSettingsActions, updateAvatarActions } from "../../redux";
import {
  DivWrapper,
  HeaderContainer,
  HeaderTitle,
  MainContainer,
} from "../AddNewProblemPage/AddNewProblemPage.styles";
import { UploadPictureContainer, UplodedPicture } from "./EditInfoPage.styles";

const EditInfoPage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.settingsData);

  const {
    data: pictureData,
    loading,
    error,
  } = useSelector((state) => state.updateAvatar);
  useEffect(() => {
    dispatch(getSettingsActions());
  }, [dispatch]);

  const handlePictureChange = (e) => {
    e.preventDefault();
    dispatch(updateAvatarActions());
  };
  return (
    <>
      <ProfileHeader></ProfileHeader>

      <MainContainer height={"132px"}>
        <HeaderContainer>
          <HeaderTitle>Edit information</HeaderTitle>

          <DivWrapper>
            <CTABtn
              type={"submit"}
              alt={"submit"}
              imgIcon={btnSubmit}
              className={"btn"}
              width={"13.17"}
              height={"9.52"}
            >
              Submit
            </CTABtn>

            <Link to={-1} className="red-btn" rel="noreferrer noopener">
              Cancel
              <img src={btnCancel} alt="cancel-icon" width={14} height={14} />
            </Link>
          </DivWrapper>
        </HeaderContainer>

        <UploadPictureContainer>
          <UplodedPicture>
            {pictureData && pictureData.picture && (
              <img
                src={pictureData.picture}
                alt="avatar"
                width={70}
                height={70}
              />
            )}
          </UplodedPicture>

          <button
            type="submit"
            id="avatar"
            name="avatar"
            onClick={(e) => handlePictureChange(e)}
          >
            {error ? (
              <>something went wrong... try again later</>
            ) : loading ? (
              <>Loading avatar...</>
            ) : (
              <>
                Load the new avatar
                <img
                  src={refresh}
                  alt="load-new-avatar"
                  width={14.58}
                  height={11.81}
                />
              </>
            )}
          </button>
        </UploadPictureContainer>

        <EditInfoForm data={data}></EditInfoForm>
      </MainContainer>

      <Footer></Footer>
    </>
  );
};

export default EditInfoPage;
