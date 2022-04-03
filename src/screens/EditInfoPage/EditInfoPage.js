import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { btnCancel, btnSubmit, refresh } from "../../assets";
import { CTABtn, EditInfoForm, Footer, ProfileHeader } from "../../components";
import {
  DivWrapper,
  HeaderContainer,
  HeaderTitle,
  MainContainer,
} from "../AddNewProblemPage/AddNewProblemPage.styles";
import { UploadPictureContainer, UplodedPicture } from "./EditInfoPage.styles";

const EditInfoPage = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      <ProfileHeader></ProfileHeader>

      <MainContainer>
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
            {selectedFile && (
              <img src={preview} alt="your-new-avatar" width={70} height={70} />
            )}
          </UplodedPicture>

          <label htmlFor="avatar">
            Load the new avatar
            <img
              src={refresh}
              alt="load-new-avatar"
              width={14.58}
              height={11.81}
            />
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={onSelectFile}
          ></input>
        </UploadPictureContainer>

        <EditInfoForm></EditInfoForm>
      </MainContainer>

      <Footer></Footer>
    </>
  );
};

export default EditInfoPage;
