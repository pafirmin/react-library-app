import React from "react";
import BookCard from "./bookCard/BookCard";
import styled from "styled-components";
import uniqid from "uniqid";

const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  max-width: 1020px;
  margin: 70px auto;
`;

const Library = (props) => {
  return (
    <Container>
      {props.books.map((book) => (
        <BookCard book={book} deleteBook={props.deleteBook} key={uniqid()} />
      ))}
    </Container>
  );
};

export default Library;
