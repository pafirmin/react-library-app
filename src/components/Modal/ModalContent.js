import React from "react";
import styled from "styled-components";

const FormContent = styled.form`
  position: relative;
  margin: 10% auto;
  width: 290px;
  background: #fff;
  color: #000;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-weight: 600;
  padding-bottom: 20px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;

const ModalHeader = styled.header`
  background-color: rgba(38, 178, 221);
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  width: 100%;
  padding: 12px 0;

  @media screen and (max-width: 600px) {
    background-color: #fff;
    color: #000;
  }
`;

const InputField = styled.input`
  padding: 9px;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #555;
  width: 80%;
`;

const SubmitBtn = styled.button`
  color: #fff;
  background-color: rgb(38, 178, 221);
  border: 1px solid gray;
  padding: 12px 16px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 1.3em;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    color: #bbb;
  }
`;

const ModalContent = (props) => {
  const handleChange = (e) => {
    props.setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <FormContent onSubmit={props.onSubmit} autoComplete="off">
      <ModalHeader>
        Add a Book
        <CloseBtn type="button" onClick={props.toggle}>
          <i className="fas fa-times"></i>
        </CloseBtn>
      </ModalHeader>

      <InputField
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Title"
        required="required"
      />

      <InputField
        type="text"
        name="author"
        onChange={handleChange}
        placeholder="Author"
        required="required"
      />

      <div>
        <input
          type="radio"
          name="isRead"
          value="Not yet read"
          onChange={handleChange}
          defaultChecked
          id="notRead"
        />
        <label htmlFor="notRead">Not yet read</label>
        <input
          type="radio"
          name="isRead"
          value="Read"
          onChange={handleChange}
          id="read"
        />
        <label htmlFor="read">Already read</label>
      </div>
      <SubmitBtn type="submit">Add to Library</SubmitBtn>
    </FormContent>
  );
};

export default ModalContent;
