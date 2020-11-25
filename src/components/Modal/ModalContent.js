import React from "react";
import styled from "styled-components";

const FormContent = styled.form`
  position: relative;
  margin: 10% auto;
  width: 290px;
  background: rgb(252, 252, 252);
  color: #000;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-weight: 600;
  padding-bottom: 20px;
`;

const ModalHeader = styled.header`
  background-color: rgba(38, 178, 221);
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  width: 100%;
  padding: 12px 0;
`;

const InputField = styled.input`
  padding: 9px;
  border: 1px solid gray;
  font-size: inherit;
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
  top: 0;
  right: 0;
  font-size: 1.3em;
  color: #fff;
  cursor: pointer;
`;

const ModalContent = (props) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    props.setValues((prevState) => ({
      ...prevState,
      [name]: value,
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
        selected="selected"
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
