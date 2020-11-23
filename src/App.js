import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import BookModal from "./components/Modal/AddBookModal";
import Book from "./components/Book";
import Library from "./components/Library";

const AddButton = styled.button`
  color: #fff;
  background-color: rgba(38, 178, 221, 0.8);
  border: 1px solid #000;
  padding: 12px 20px;
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 4px;
  z-index: 1;
`;

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const toggleModal = () => setModalShow(!modalShow);

  const [books, setBooks] = useState([]);
  const addBook = (values) => {
    const book = new Book(values);
    setBooks((prevState) => [...prevState, book]);
  };

  const deleteBook = (book) => {
    const index = books.indexOf(book);
    let arr = [...books];
    arr.splice(index, 1);
    setBooks(arr);
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "100px" }}>
      <AddButton onClick={toggleModal}>Add a Book</AddButton>
      <BookModal show={modalShow} toggle={toggleModal} addBook={addBook} />
      <Library books={books} deleteBook={deleteBook} />
    </div>
  );
};

export default App;
