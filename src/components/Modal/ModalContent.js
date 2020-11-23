import React from "react";
import styled from "styled-components";

const FormContent = styled.form`
  position: relative;
  margin: 10% auto;
  width: 290px;
  height: 440px;
  background: rgb(252, 252, 252);
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  padding-bottom: 12px;
`;
const ModalHeader = styled.header`
  background-color: rgba(38, 178, 221);
  color: #fff;
  font-size: 1.2em;
  text-align: center;
  width: 100%;
  padding: 12px 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const InputField = styled.input`
  padding: 9px;
  border: 1px solid gray;
  border-radius: 4px;
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
    <FormContent onSubmit={props.onSubmit}>
      <ModalHeader>
        Add a Book
        <CloseBtn type="button" onClick={props.toggle}>
          <i className="fas fa-times"></i>
        </CloseBtn>
      </ModalHeader>
      <label>
        <p>Title:</p>
        <InputField type="text" name="title" onChange={handleChange} />
      </label>
      <label>
        <p>Author:</p>
        <InputField type="text" name="author" onChange={handleChange} />
      </label>
      <label>
        <p>Pages:</p>
        <InputField type="number" name="pages" onChange={handleChange} />
      </label>
      <div>
        <input
          type="radio"
          name="isRead"
          value="Not yet read"
          onChange={handleChange}
          defaultChecked
        />
        <label>Not yet read</label>
        <input
          type="radio"
          name="isRead"
          value="Read"
          onChange={handleChange}
        />
        <label>Already read</label>
      </div>
      <SubmitBtn type="submit">Add to Library</SubmitBtn>
    </FormContent>
  );
};

export default ModalContent;
