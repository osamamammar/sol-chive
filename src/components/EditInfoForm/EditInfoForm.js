import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { btnSubmit } from "../../assets";
import { updateSettingsActions } from "../../redux";
import {
  DivWrapper,
  FormContainer,
} from "../AddNewProblemForm/AddNewProblrm.styles";
import CTABtn from "../CTABtn/CTABtn";

const EditInfoForm = ({ data }) => {
  const [name, setName] = useState("");
  const [contacts, setContacts] = useState("");
  const [about, setAbout] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setName(data.name);
      setContacts(data.contacts);
      setAbout(data.about);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSettingsActions({ name, contacts, about, navigate }));
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <DivWrapper>
        <label htmlFor="name">Display Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </DivWrapper>

      <DivWrapper>
        <label htmlFor="contacts">Contacts</label>
        <input
          type="text"
          name="contacts"
          id="contacts"
          placeholder="Enter your contacts"
          value={contacts}
          onChange={(e) => setContacts(e.target.value)}
        />
      </DivWrapper>

      <DivWrapper>
        <label htmlFor="about">About</label>
        <textarea
          className="about"
          placeholder="Enter short bio about yourself"
          name="about"
          id="about"
          rows={10}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </DivWrapper>

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
    </FormContainer>
  );
};

export default EditInfoForm;
