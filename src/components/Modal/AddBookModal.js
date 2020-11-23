import React, { useState } from "react";
import styled from "styled-components";
import FormContent from "./ModalContent";

const Container = styled.div`
  display: ${(props) => props.show};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(27, 27, 27, 0.9);
  z-index: 2;
`;
const AddBookModal = (props) => {
  const showHideClass = props.show ? "block" : "none";
  const [values, setValues] = useState({
    title: "",
    author: "",
    pages: "",
    isRead: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.toggle();
    props.addBook(values);
  };

  return (
    <Container show={showHideClass}>
      <FormContent
        onSubmit={handleSubmit}
        setValues={setValues}
        toggle={props.toggle}
      />
    </Container>
  );
};

export default AddBookModal;
