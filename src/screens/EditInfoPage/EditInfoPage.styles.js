import styled from "styled-components";

export const UploadPictureContainer = styled.div`
  background-color: var(--color-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  width: fit-content;
  padding-inline: 14px;
  padding-block: 20px;
  border-radius: 9px;
  margin-block: 0 20px;
  margin-inline: auto;
  > label {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    cursor: pointer;
    background-color: var(--color-yellow);
    color: var(--color-primary);
    border-radius: 6px;
    padding-inline: 18px;
    padding-block: 4px;
    transition: all 0.2s ease-in-out;
    :hover {
      background-color: var(--color-yellow-dark);
    }
  }
  > input#avatar {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
`;

export const UplodedPicture = styled.div`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background-color: white;
  > img {
    width: 70px;
    height: 70px;
    border: 1px solid var(--color-text-light);
    border-radius: 50%;
    object-fit: fill;
  }
`;
