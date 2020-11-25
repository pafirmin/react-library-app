import React, { useState } from "react";
import styled from "styled-components";
import FormContent from "./ModalContent";

const AddButton = styled.button`
  color: #fff;
  background-color: rgba(38, 178, 221, 0.8);
  border: 1px solid #000;
  padding: 12px 20px;
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 4px;
  z-index: 1;

  &:hover {
    background-color: rgb(38, 178, 221);
  }
`;

const Container = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(27, 27, 27, 0.9);
  z-index: 2;
`;

const Modal = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const toggleModal = () => setModalShow(!modalShow);

  const [values, setValues] = useState({
    title: "",
    author: "",
    isRead: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toggleModal();
    props.addBook(values);
  };

  return (
    <div>
      <AddButton onClick={toggleModal}>Add a Book</AddButton>
      <Container show={modalShow}>
        <FormContent
          onSubmit={handleSubmit}
          setValues={setValues}
          toggle={toggleModal}
        />
      </Container>
    </div>
  );
};

export default Modal;
